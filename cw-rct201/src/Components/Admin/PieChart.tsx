import React from "react";
import { Chart } from "react-google-charts";
import { productsApi } from "../../api/ProductsApi";
import { Data } from "../../Pages/MobileProducts";
export const options = {
  title: "Total Products",
};
type DataI = {
  name: any;
};
const PieChart = () => {
  let obj:any= {};
  const [productsData, setPrdocutsData] = React.useState<Data[]>([]);
  const getProductsData = async () => {
    let response = await productsApi();
    setPrdocutsData(response);
  };

  for (let i = 0; i <= productsData.length - 1; i++) {
    if (obj[productsData[i].name] === undefined) {
      obj[productsData[i].name] = 1;
    } else {
      obj[productsData[i].name]++;
    }
  }

  let bigArr = [];
  for (let key in obj) {
    let arr = [];
    arr.push(key);
    arr.push(obj[key]);
    bigArr.push(arr);
  }

  const data = [["TASK", "Products"]];
  for (let i = 0; i <= bigArr.length - 1; i++) {
    data.push(bigArr[i]);
  }

  React.useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div>
      <Chart
      
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default PieChart;
