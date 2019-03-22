"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Orders;

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * sortTable
 *
 * This is a table, with filters
 *
 */
function Orders() {
  var InputGroup = _antd.Input.Group;
  var Option = _antd.Select.Option;
  var dateFormat = 'DD/MM/YYYY';
  var TabPane = _antd.Tabs.TabPane;
  var columns = [{
    title: 'Order ID',
    dataIndex: 'orderId',
    width: '100px',
    sorter: function sorter(a, b) {
      return a.name.length - b.name.length;
    },
    sortDirections: ['descend']
  }, {
    title: 'Order #',
    dataIndex: 'orderNum',
    width: '100px',
    sorter: function sorter(a, b) {
      return a.orderNum - b.orderNum;
    },
    render: function render(text) {
      return React.createElement(_reactRouterDom.Link, {
        to: "orders/784776467"
      }, text);
    }
  }, {
    title: 'Order Date',
    dataIndex: 'orderDate',
    width: '100px',
    sorter: function sorter(a, b) {
      return a.orderDate - b.orderDate;
    }
  }, {
    title: 'DVM ID',
    dataIndex: 'dvmId',
    width: '100px',
    sorter: function sorter(a, b) {
      return a.dvmId - b.dvmId;
    }
  }, {
    title: 'Client',
    dataIndex: 'client',
    width: '100px'
  }, {
    title: 'Platform',
    dataIndex: 'platform',
    width: '100px',
    filters: [{
      text: 'Recent',
      value: 'recentPlatforms',
      children: [{
        text: 'Vets First Choice',
        value: 'Vets First Choice'
      }]
    }, {
      text: 'All',
      value: 'allPlatforms',
      children: [{
        text: 'Atlas',
        value: 'Atlas'
      }, {
        text: 'MyVetsMeds',
        value: 'MyVetsMeds'
      }, {
        text: 'PTP',
        value: 'PTP'
      }, {
        text: 'RoadRunner',
        value: 'RoadRunner'
      }, {
        text: 'Vets First Choice',
        value: 'Vets First Choice'
      }, {
        text: 'VIP Petcare',
        value: 'VIP Petcare'
      }, {
        text: 'VPA',
        value: 'VPA'
      }]
    }],
    onFilter: function onFilter(value, record) {
      return record.platform.indexOf(value) === 0;
    }
  }, {
    title: 'Facility',
    dataIndex: 'facility',
    width: '100px',
    filters: [{
      text: 'Recent',
      value: 'Recent Facilities',
      children: [{
        text: 'VFC Warehouse',
        value: 'VFC Warehouse'
      }]
    }, {
      text: 'All',
      value: 'All Facilities',
      children: [{
        text: 'Atlas Facility',
        value: 'Atlas Facility'
      }, {
        text: 'Greer NC Facility',
        value: 'Greer NC Facility'
      }, {
        text: 'HILLS CA Facility',
        value: 'HILLS CA Facility'
      }, {
        text: 'HILLS NY Facility',
        value: 'HILLS NY Facility'
      }, {
        text: 'HILLS TX Facility',
        value: 'HILLS TX Facility'
      }, {
        text: 'Netherlands Facility',
        value: 'Netherlands Facility'
      }, {
        text: 'Portland Facility',
        value: 'Portland Facility'
      }]
    }],
    onFilter: function onFilter(value, record) {
      return record.facility.indexOf(value) === 0;
    }
  }, {
    title: 'Ship Method',
    dataIndex: 'shipMethod',
    width: '100px',
    filters: [{
      text: 'Recent',
      value: 'Recent Ship Methods',
      children: [{
        text: 'Standard',
        value: 'Standard'
      }]
    }, {
      text: 'All',
      value: 'All Ship Methods',
      children: [{
        text: '2nd Day',
        value: '2nd Day'
      }, {
        text: 'Ground',
        value: 'Ground'
      }, {
        text: 'Next Day',
        value: 'Next Day'
      }, {
        text: 'Standard',
        value: 'Standard'
      }, {
        text: 'USPS First Class',
        value: 'USPS First Class'
      }]
    }],
    onFilter: function onFilter(value, record) {
      return record.shipMethod.indexOf(value) === 0;
    }
  }, {
    title: 'Order Status',
    dataIndex: 'status',
    width: '150px',
    filters: [{
      text: 'Common Statuses',
      value: 'Common Statuses',
      children: [{
        text: 'Fulfillment Processing',
        value: 'Fulfillment Processing'
      }, {
        text: 'Canceled',
        value: 'Canceled'
      }, {
        text: 'CC Auth Declined',
        value: 'CC Auth Declined'
      }]
    }, {
      text: 'All',
      value: 'allStatuses',
      children: [{
        text: 'Canceled',
        value: 'Canceled'
      }, {
        text: 'Fulfillment Ready',
        value: 'Fulfillment Ready'
      }, {
        text: 'Pending Authorization',
        value: 'Pending Authorization'
      }, {
        text: 'Pharmacy',
        value: 'Pharmacy'
      }, {
        text: 'Sent for Fulfillment',
        value: 'Sent for Fulfillment'
      }]
    }],
    onFilter: function onFilter(value, record) {
      return record.status.indexOf(value) === 0;
    },
    render: function render(text) {
      return React.createElement(_antd.Badge, {
        status: "processing",
        text: text
      });
    }
  }, {
    title: 'Order Total',
    dataIndex: 'total',
    width: '100px',
    sorter: function sorter(a, b) {
      return a.total - b.total;
    }
  }];
  var data = [{
    key: '1',
    orderId: '5494685',
    orderNum: '56995',
    orderDate: '04/15/2017',
    dvmId: '6584',
    client: 'Cecilia Pozo',
    platform: 'RoadRunner',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Shipped',
    total: '$87.50'
  }, {
    key: '2',
    orderId: '1525884',
    orderNum: '21886',
    orderDate: '12/31/2019',
    dvmId: '9999',
    client: 'Russ Cargill',
    platform: 'VIP Petcare',
    facility: 'Atlas Facility',
    shipMethod: 'UPS',
    status: 'Done',
    total: '$34.75'
  }, {
    key: '3',
    orderId: '1326599',
    orderNum: '25515',
    orderDate: '01/23/2018',
    dvmId: '4659',
    client: 'Jeffory Lebowski',
    platform: 'VPA',
    facility: 'VFC Warehouse',
    shipMethod: 'FedEx',
    status: 'Cancelled',
    total: '$220.00'
  }, {
    key: '5',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '6',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '7',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '8',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '9',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '10',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '11',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '12',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '13',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '14',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '15',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '16',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '17',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '18',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '19',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '20',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '21',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'Atlas Facility',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '22',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }, {
    key: '23',
    orderId: '2544152',
    orderNum: '45985',
    orderDate: '06/30/2018',
    dvmId: '0418',
    client: 'Emily Baker',
    platform: 'Vets First Choice',
    facility: 'VFC Warehouse',
    shipMethod: 'USPS',
    status: 'Delayed',
    total: '$120.12'
  }];
  var views = React.createElement(_antd.Row, {
    type: "flex",
    justify: "space-around",
    align: "middle",
    style: {
      background: '#fefefe',
      padding: '15px 0'
    }
  }, React.createElement(_antd.Badge, {
    count: 2,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "primary",
    ghost: true
  }, "CC Auth Declined")), React.createElement(_antd.Badge, {
    count: 16,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "danger",
    ghost: true
  }, "PV1 Exceptions")), React.createElement(_antd.Badge, {
    count: 10,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "danger",
    ghost: true
  }, "Inventory Exceptions")), React.createElement(_antd.Badge, {
    count: 3,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "primary",
    ghost: true
  }, "Call Center Exceptions")), React.createElement(_antd.Badge, {
    count: 8,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "danger",
    ghost: true
  }, "Tech Exceptions")), React.createElement(_antd.Badge, {
    count: 4,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "primary",
    ghost: true
  }, "Fraud Risk")), React.createElement(_antd.Badge, {
    count: 1,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "primary",
    ghost: true
  }, "Ads Exceptions")), React.createElement(_antd.Badge, {
    count: 0,
    overflowCount: 10
  }, React.createElement(_antd.Button, {
    type: "primary",
    ghost: true
  }, "Autoship Exceptions")), React.createElement("br", null));
  var queues = React.createElement(_antd.Row, {
    type: "flex",
    justify: "space-around",
    align: "middle",
    style: {
      background: '#fefefe',
      padding: '15px 0'
    }
  }, React.createElement(_antd.Button, null, "All Open"), React.createElement(_antd.Button, null, "My Orders"), React.createElement(_antd.Button, null, "Fulfillment Processing"), React.createElement(_antd.Button, null, "Inventory In Motion"), React.createElement(_antd.Button, null, "Purina Open Orders"), React.createElement(_antd.Button, null, "Royal Canin Open Orders"), React.createElement(_antd.Button, null, "Hills Open Orders"), React.createElement("br", null));

  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  var RangePicker = _antd.DatePicker.RangePicker;
  var search = React.createElement(_antd.Row, {
    style: {
      background: '#fefefe',
      padding: '15px 0'
    }
  }, React.createElement(_antd.Col, {
    span: 8
  }, React.createElement(InputGroup, {
    compact: true
  }, React.createElement(_antd.Select, {
    defaultValue: "Option1"
  }, React.createElement(Option, {
    value: "Option1"
  }, "Order #"), React.createElement(Option, {
    value: "Option2"
  }, "Client Name"), React.createElement(Option, {
    value: "Option3"
  }, "Client Email"), React.createElement(Option, {
    value: "Option4"
  }, "DVM ID"), React.createElement(Option, {
    value: "Option5"
  }, "Invoice #"), React.createElement(Option, {
    value: "Option6"
  }, "Order ID"), React.createElement(Option, {
    value: "Option7"
  }, "Ship Order #"), React.createElement(Option, {
    value: "Option8"
  }, "SKU"), React.createElement(Option, {
    value: "Option9"
  }, "Tote #"), React.createElement(Option, {
    value: "Option10"
  }, "Tracking #")), React.createElement(_antd.Input, {
    style: {
      width: '50%'
    }
  }), React.createElement(_antd.Button, {
    icon: "search",
    shape: "circle-outline",
    onClick: function onClick() {}
  }))), React.createElement(_antd.Col, {
    span: 12
  }, React.createElement(InputGroup, {
    compact: true
  }, React.createElement(RangePicker, {
    format: dateFormat
  }), React.createElement(_antd.Button, {
    icon: "search",
    shape: "circle-outline"
  }))), React.createElement("br", null));
  return React.createElement("div", null, React.createElement(_antd.Tabs, {
    defaultActiveKey: "1"
  }, React.createElement(TabPane, {
    tab: React.createElement("span", null, React.createElement(_antd.Icon, {
      type: "search"
    }), "Search"),
    key: "1"
  }, search), React.createElement(TabPane, {
    tab: React.createElement("span", null, React.createElement(_antd.Icon, {
      type: "bars"
    }), "Queues"),
    key: "2"
  }, views), React.createElement(TabPane, {
    tab: React.createElement("span", null, React.createElement(_antd.Icon, {
      type: "profile"
    }), "Quick Search"),
    key: "3"
  }, queues)), React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    onChange: onChange
  }));
}
