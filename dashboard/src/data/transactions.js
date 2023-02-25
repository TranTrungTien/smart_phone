import moment from "moment-timezone";
export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default [
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),
    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    productName: "productName",
    status: "Paid",
    quantity: 1,
    total: "799,00",
    solderName: "solderName",
    transactionId: uuidv4(),

    created: moment().subtract(1, "days").format("DD MMM YYYY"),
  },
];
