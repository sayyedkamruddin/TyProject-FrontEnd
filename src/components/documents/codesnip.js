import  SyntaxHighlighter  from "react-syntax-highlighter";
import { a11yDark,shadesOfPurple} from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeSnip = (props) => {

  const {codeString ,title, type ,para} = props.codeObj;
  // (num) => num + 1 function myFunction() {
  //   let text = document.getElementById("demo").innerHTML;
  //   document.getElementById("demo").innerHTML =
  //   text.toLowerCase();
  // }`;
  return (
    <div
      
      className=" w-full px-3"
    >
      <div className=" p-3  mt- max-[768px]:my-2   ">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="lead p-2 ">
        {para}
        </p>
      </div>
      <div className="min-[768px]:my-6 overflow-y-scroll overflow-hidden h-80    mx-3 rounded-lg bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
        <div className="not-prose ">
          <div className="flex flex-col min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b  border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
            <h3 className="mr-auto  pt-1  font-semibold text-white">
              {title}
            </h3>
            <h4 className="mr-auto  pb-1 text-xs font-semibold text-white/75  ">
              {type}
            </h4>
          </div>
          <SyntaxHighlighter language="javascript" 
          
          style={shadesOfPurple}
          customStyle={{ 
            overflow:"hidden",
            padding:"20px 16px ",
            background:"rgba(0,0,0,0)",
        }}
        wrapLongLines={true}
        >
            {codeString}
          </SyntaxHighlighter>
                 </div>
      </div>
    </div>
  );
};
export default CodeSnip;
