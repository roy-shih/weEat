import React from "react";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, Button} from "@nextui-org/react";
import {useAsyncList} from "@react-stately/data";
import {Input} from "@nextui-org/react";

export default function List() {
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList({
    async load({signal, cursor}) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", {signal});
      let json = await res.json();

      if (!cursor) {
        setIsLoading(false);
      }

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const hasMore = page < 9;

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore && !isLoading ? (
          <div className="flex w-full justify-center">
            <Button isDisabled={list.isLoading} variant="flat" onPress={list.loadMore}>
              {list.isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
           
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[90vh] overflow-scroll, text-black pt-[60px]",
        table: "min-h-[420px]",
      }}
    >
      
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="height">Money</TableColumn>
        <TableColumn key="mass">Amount</TableColumn>
        {/* <TableColumn key="birth_year">Check</TableColumn> */}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.name}>
            <TableCell>{getKeyValue(item, "name")}</TableCell>
            <TableCell>
            <Input
              type="number"
              // label="Price" 
              placeholder={getKeyValue(item, "height")}
              labelPlacement="outside"
            />
            </TableCell>
            <TableCell>
            <Input
              type="number"
              // label="Price" 
              placeholder={getKeyValue(item, "mass")}
              labelPlacement="outside"
            />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
