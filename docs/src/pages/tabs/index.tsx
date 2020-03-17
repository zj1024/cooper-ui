// import * as React from 'react'
// import { Tabs, Card, Collapse, Foldcard } from '../../../../libs'
// import Codebox from '../../components/codebox'
// import { basic } from './example'

// export default () => {
//   const { TabPane } = Tabs
//   return (
//     <div className="h-full">
//       <h1>- </h1>
//       <div className="flex j-between">
//         <div className="w-p-48">
//           <h2 className="text-content">上中下布局</h2>
//           <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
//             <Tabs defaultActiveKey="1">
//               <TabPane tab="选项一test" key="1">
//                 <Card className="w-full">
//                   <Collapse>
//                     <Collapse.Item title="collapse1">1</Collapse.Item>
//                     <Collapse.Item title="collapse2">2</Collapse.Item>
//                     <Collapse.Item title="collapse3">3</Collapse.Item>
//                   </Collapse>
//                 </Card>
//               </TabPane>
//               <TabPane tab="选项二" key="2">
//                 <div className="w-full bg-blue">
//                   <h1>选项二内容</h1>
//                   <h1>选项二内容</h1>
//                   <h1>选项二内容</h1>
//                 </div>
//               </TabPane>
//               <TabPane tab="选项三" key="3">
//                 <div>this is tab3</div>
//               </TabPane>
//             </Tabs>
//           </Foldcard>
//         </div>
//         <div className="w-p-48">
//           <h2 className="text-content">上中下布局</h2>
//           <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
//             <Tabs defaultActiveKey="2" destoryOnChange={true}>
//               <TabPane tab="选项一test" key="1">
//                 <Card className="w-full">
//                   <Collapse>
//                     <Collapse.Item title="collapse1">1</Collapse.Item>
//                     <Collapse.Item title="collapse2">2</Collapse.Item>
//                     <Collapse.Item title="collapse3">3</Collapse.Item>
//                   </Collapse>
//                 </Card>
//               </TabPane>
//               <TabPane tab="选项二" key="2">
//                 <div className="w-full bg-blue">
//                   <h1>选项二内容</h1>
//                   <h1>选项二内容</h1>
//                   <h1>选项二内容</h1>
//                 </div>
//               </TabPane>
//               <TabPane tab="选项三" key="3">
//                 <div>this is tab3</div>
//               </TabPane>
//             </Tabs>
//           </Foldcard>
//         </div>
//       </div>
//     </div>
//   )
// }
