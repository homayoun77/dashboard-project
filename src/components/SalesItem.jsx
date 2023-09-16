import React, { useState } from "react";

import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import {
  BadgeDelta,
  Bold,
  Button,
  Card,
  Divider,
  DonutChart,
  Flex,
  List,
  ListItem,
  Metric,
  Tab,
  TabGroup,
  TabList,
  Text,
  Title,
} from "@tremor/react";

const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const SalesItem = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Card className="max-w-full mx-auto">
      <Flex className=" lg:space-x-8 flex-col lg:flex-row" justifyContent="center">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex} className="w-fit">
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Portfolio Value</Text>
      <Metric>$ 25,345</Metric>
      <Divider />
      <Text className="mt-8">
        <Bold>Asset Allocation</Bold>
      </Text>
      <Text>1 Asset class - 5 Holdings</Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          category="value"
          index="name"
          className="mt-6"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className=" truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since Transaction</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex justifyContent="end">
                  <Text className="mx-2">
                    $ {Intl.NumberFormat("us").format(stock.value).toString()}
                  </Text>
                  <BadgeDelta
                    deltaType={stock.deltaType}
                    size="xs"
                    className=""
                  >
                    {stock.performance}
                  </BadgeDelta>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Divider/>
      <Button variant="light" icon={ArrowRightIcon} iconPosition="right" size="xs">View more</Button>
    </Card>
  );
};

export default SalesItem;
