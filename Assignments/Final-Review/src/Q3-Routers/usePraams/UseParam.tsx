// export default [
//   {
//     path: "/home",
//     element: <Home />,
//     children: [
//       {
//         path: "messages",
//         element: <Message />,
//         children: [
//           {
//             path: "detail/:id/:title/:content",
//             element: <Detail />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default function Message() {
//   //messages state here
//   return (
//     <div>
//       <ul>
//         {messages.map((msg) => (
//           <li>
//             <Link to={`detail/${msg.id}/${msg.title}/${msg.content}`}>
//               {msg.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }
