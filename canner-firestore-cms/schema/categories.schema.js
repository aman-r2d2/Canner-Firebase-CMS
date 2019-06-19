/** @jsx builder */

import builder from 'canner-script';
import {getFirstCategories} from './utils/categories_util';

async function chk() {
  let options = [];

  let res = await getFirstCategories();

  for(let i = 0; i < res.docs.length ;i++){
    let temp = res.docs[i]._document.proto.fields.name['stringValue']
    options.push({text: temp, value: temp});
    console.log(res.docs[i]._document.proto.fields.name['stringValue']);
  }
  console.log(options);
  return options;
}


export default () => (
 <array keyName="category" title="Category"
  ui="tree"
  uiParams={{
    relationField: 'parent',
    textCol: 'name',
    columns: [{
      title: 'Title',
      dataIndex: 'name'
    }, {
      title: 'Parent Category',
      dataIndex: 'parent.name'
    }]
}}>

  <string keyName="name" title="Title"/>

  <string keyName="parent"
    title="Parent category"
    ui="select"
    uiParams={{
      options: chk()
    }}
  />
</array>
);


//
// <relation keyName="parent"
//   title="Parent category"
//   relation={{
//     type: 'toOne',
//     to: 'category'
//   }}
//   ui="singleSelectTree"
//   uiParams={{
//     textCol: "name",
//     columns: [{
//       title: 'Title',
//       dataIndex: 'name'
//     }]
//   }}
// />


// <string keyName="parent"
//   title="Parent category"
//   ui="select"
//   uiParams={{
//     options: chk()
//   }}
// />
