
function App() {

  return (


    // 水平排列flex flex-row
    // <div className="flex flex-row space-x-4 p-4">
    //   <div className="bg-blue-200 p-4">元素 1</div>
    //   <div className="bg-green-200 p-4">元素 2222222</div>
    //   <div className="bg-red-200 p-4">元素 3</div>
    // </div>

    // 垂直排列flex flex-col
    // <div className="flex flex-col space-y-4 p-4">
    //   <div className="bg-blue-200 p-4 w-64">元素 1</div>
    //   <div className="bg-green-200 p-4 w-64">元素 2222222</div>
    //   <div className="bg-red-200 p-4 w-64">元素 3</div>
    // </div>

    //标签大小
    // <div className="flex flex-col space-y-4 p-4">
    //   <div className="bg-blue-200 p-4 w-32 h-20">元素 1</div>
    //   <div className="bg-green-200 p-4 w-64 h-32">元素 2222222</div>
    //   <div className="bg-red-200 p-4 w-full">元素 3</div>
    // </div>

    // //标签边框
    // <div className="flex flex-col space-y-4 p-4">
    //   <div className="bg-blue-200 p-4 w-32 h-20 border-red-400 border-4">元素 1</div>
    //   <div className="bg-green-200 p-4 w-64 h-32">元素 2222222</div>
    //   <div className="bg-red-200 p-4 w-full">元素 3</div>
    // </div>

    // 标签的距离
    // <div className="flex flex-row ">
    //   <div className="bg-blue-200 p-4 mr-10">元素 1</div>
    //   <div className="bg-green-200 p-4 mr-20">元素 2222222</div>
    //   <div className="bg-red-200 p-4 mt-10">元素 3</div>
    // </div>

    // 字体文字 , 背景
    <div className="flex flex-row space-x-4 p-4">
      <div className="bg-blue-200 p-4 ">元素 1</div>
      <div className="bg-green-200 p-4 font-mono font-bold text-blue-600 text-2xl">元素 2222222</div>
      <div className="bg-red-200 p-4">元素 3</div>
    </div>

  );

}

export default App;
