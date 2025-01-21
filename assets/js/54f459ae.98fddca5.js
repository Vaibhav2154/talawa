"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[238],{4261:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/offline/offline-user-actions","title":"Offline User Actions","description":"This document outlines the detailed process for managing user actions with GraphQL operations in scenarios where network connectivity can vary. The flow includes creating GraphQL operations, determining whether to execute or cache these operations based on network status, and handling offline scenarios by queuing actions and executing them once the device is back online.","source":"@site/docs/docs/offline/offline-user-actions.md","sourceDirName":"docs/offline","slug":"/docs/offline/offline-user-actions","permalink":"/docs/docs/offline/offline-user-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/docs/offline/offline-user-actions.md","tags":[],"version":"current","frontMatter":{"id":"offline-user-actions","title":"Offline User Actions"},"sidebar":"tutorialSidebar","previous":{"title":"Feed Caching","permalink":"/docs/docs/offline/feed-caching"},"next":{"title":"Placeholder","permalink":"/docs/auto-docs/introduction"}}');var t=i(4848),r=i(8453);const c={id:"offline-user-actions",title:"Offline User Actions"},o=void 0,d={},l=[{value:"Flow-Breakdown",id:"flow-breakdown",level:2},{value:"CachedUserAction Model Documentation",id:"cacheduseraction-model-documentation",level:2},{value:"Overview",id:"overview",level:3},{value:"Properties",id:"properties",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>operation</code>",id:"operation",level:4},{value:"<code>variables</code>",id:"variables",level:4},{value:"<code>timeStamp</code>",id:"timestamp",level:4},{value:"<code>status</code>",id:"status",level:4},{value:"<code>metaData</code>",id:"metadata",level:4},{value:"<code>operationType</code>",id:"operationtype",level:4},{value:"<code>expiry</code>",id:"expiry",level:4},{value:"Methods",id:"methods",level:3},{value:"<code>fromJson</code>",id:"fromjson",level:4},{value:"<code>toJson</code>",id:"tojson",level:4},{value:"<code>toString</code>",id:"tostring",level:4},{value:"<code>execute</code>",id:"execute",level:4},{value:"Operation Types Handled",id:"operation-types-handled",level:4},{value:"Usage",id:"usage",level:3},{value:"Example Usage",id:"example-usage",level:4}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This document outlines the detailed process for managing user actions with GraphQL operations in scenarios where network connectivity can vary. The flow includes creating GraphQL operations, determining whether to execute or cache these operations based on network status, and handling offline scenarios by queuing actions and executing them once the device is back online."}),"\n",(0,t.jsx)(n.h2,{id:"flow-breakdown",children:"Flow-Breakdown"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"High level offline action flow",src:i(1560).A+"",width:"1071",height:"668"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"User Action Initiation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The flow begins when a user performs an action within the application. This action could involve interacting with UI elements, such as liking a post, creating an event, or any other activity that requires communication with a backend server."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GraphQL Operation Creation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Based on the user action, a GraphQL operation is created. This operation represents the request to be sent to the server to process the user\u2019s action. The operation could be a mutation or query depending on the action performed."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Determine Execution or Caching"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"executeOrCacheOperation()"})," method of the ",(0,t.jsx)(n.code,{children:"cacheService"})," is called to decide whether to execute the GraphQL operation immediately or cache it for later execution based on the device's network connectivity."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"3a. If the Device is Online:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"i. Execute GraphQL Operation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The GraphQL operation is executed immediately. The ",(0,t.jsx)(n.code,{children:"cacheService"})," sends the request to the server, and the response is processed accordingly. This ensures real-time processing and immediate feedback to the user."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"3b. If the Device is Offline:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"i. Create Cached User Action:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.code,{children:"cachedUserAction"})," is created to represent the offline GraphQL operation. This object includes all necessary details of the operation, such as the operation type, variables, and any metadata required for execution."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"ii. Push to Offline Action Queue:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"cachedUserAction"})," is pushed to the ",(0,t.jsx)(n.code,{children:"OfflineActionQueue"}),", a data structure designed to store actions that cannot be executed immediately due to the lack of network connectivity."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"iii. Wait Until Device is Back Online:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The system continuously monitors network connectivity and waits until the device regains online status before proceeding to execute any actions in the ",(0,t.jsx)(n.code,{children:"OfflineActionQueue"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"iv. Process Offline Actions:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When the device is back online, the application pops each action from the ",(0,t.jsx)(n.code,{children:"OfflineActionQueue"})," and processes them. Actions are executed in the order they were added to the queue."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"v. Re-execute Actions:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For each ",(0,t.jsx)(n.code,{children:"cachedUserAction"}),", the system recreates the GraphQL operation and executes it as it was intended initially. This ensures that all user actions are processed, even if there were temporary connectivity issues."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cacheduseraction-model-documentation",children:"CachedUserAction Model Documentation"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"CachedUserAction"})," class represents a user action that is cached for offline use. This model is used to store actions when the device is offline, allowing them to be executed once the device is back online. This documentation covers the class's properties, methods, and usage."]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"CachedUserAction"})," class provides the following functionalities:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Serialization:"})," Converts the object to and from JSON for easy storage and retrieval."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Execution:"})," Executes the cached user action based on its type, leveraging GraphQL operations."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"id",children:(0,t.jsx)(n.code,{children:"id"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"String"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The unique identifier for the cached user action."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"operation",children:(0,t.jsx)(n.code,{children:"operation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"String"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The GraphQL operation to be performed for the cached user action. This could be a mutation or a query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"1"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"variables",children:(0,t.jsx)(n.code,{children:"variables"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Map<String, dynamic>?"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The variables required for the GraphQL operation, if any."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"2"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"timestamp",children:(0,t.jsx)(n.code,{children:"timeStamp"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"DateTime"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The timestamp when the action was cached. This helps in managing the order of operations and expiration of cache."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"3"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"status",children:(0,t.jsx)(n.code,{children:"status"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"CachedUserActionStatus"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The status of the cached user action, which indicates whether the action is pending, completed, or failed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"4"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"metadata",children:(0,t.jsx)(n.code,{children:"metaData"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Map<String, dynamic>?"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," Any additional metadata related to the cached user action. This could include information about the context or additional details relevant to the operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"5"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"operationtype",children:(0,t.jsx)(n.code,{children:"operationType"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"CachedOperationType"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The type of operation for the cached user action. This helps in determining how the operation should be executed (e.g., authenticated vs. non-authenticated queries or mutations)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"6"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"expiry",children:(0,t.jsx)(n.code,{children:"expiry"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"DateTime"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," The expiry date and time for the cached user action. Actions that have expired are generally not executed and may be purged from the cache."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hive Field:"})," ",(0,t.jsx)(n.code,{children:"7"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h4,{id:"fromjson",children:(0,t.jsx)(n.code,{children:"fromJson"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," Creates a ",(0,t.jsx)(n.code,{children:"CachedUserAction"})," instance from a JSON-compatible map."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"json"})," (",(0,t.jsx)(n.code,{children:"Map<String, dynamic>"}),"): A map representing the ",(0,t.jsx)(n.code,{children:"CachedUserAction"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Returns:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CachedUserAction"}),": A new instance of ",(0,t.jsx)(n.code,{children:"CachedUserAction"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"tojson",children:(0,t.jsx)(n.code,{children:"toJson"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," Converts the ",(0,t.jsx)(n.code,{children:"CachedUserAction"})," to a JSON-compatible map."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"None"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Returns:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Map<String, dynamic>"}),": A map representing the ",(0,t.jsx)(n.code,{children:"CachedUserAction"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"tostring",children:(0,t.jsx)(n.code,{children:"toString"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," Returns a string representation of the ",(0,t.jsx)(n.code,{children:"CachedUserAction"})," instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"None"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Returns:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"String"}),": A string representation of the ",(0,t.jsx)(n.code,{children:"CachedUserAction"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"execute",children:(0,t.jsx)(n.code,{children:"execute"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Description:"})," Executes the cached user action based on its operation type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"None"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Returns:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Future<QueryResult<Object?>>"}),": The result of the executed GraphQL operation. The result is wrapped in a ",(0,t.jsx)(n.code,{children:"QueryResult"})," object, which includes details of the operation's success or failure."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"operation-types-handled",children:"Operation Types Handled"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"execute"})," method handles various GraphQL operations based on the ",(0,t.jsx)(n.code,{children:"operationType"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"gqlAuthQuery"}),":"]})," Executes an authenticated GraphQL query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"gqlAuthMutation"}),":"]})," Executes an authenticated GraphQL mutation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"gqlNonAuthQuery"}),":"]})," Executes a non-authenticated GraphQL query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"gqlNonAuthMutation"}),":"]})," Executes a non-authenticated GraphQL mutation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default Case:"})," Returns ",(0,t.jsx)(n.code,{children:"databaseFunctions.noData"})," if the operation type is unknown."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"CachedUserAction"})," class is used in scenarios where user actions need to be cached due to offline conditions. It helps ensure that user actions are not lost and can be executed later when the device is back online. The class supports both serialization for persistence and execution based on operation type."]}),"\n",(0,t.jsx)(n.h4,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"// Creating a CachedUserAction\nfinal action = CachedUserAction(\n  id: 'unique-id',\n  operation: 'mutation LikePost($postId: ID!) { likePost(postId: $postId) { id likes } }',\n  variables: {'postId': '123'},\n  timeStamp: DateTime.now(),\n  status: CachedUserActionStatus.pending,\n  metaData: {'source': 'user_action'},\n  operationType: CachedOperationType.gqlAuthMutation,\n  expiry: DateTime.now().add(Duration(days: 1)),\n);\n\n// Converting to JSON\nfinal json = action.toJson();\n\n// Creating from JSON\nfinal newAction = CachedUserAction.fromJson(json);\n\n// Executing the action\nfinal result = await newAction.execute();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1560:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/High_level_offline_action_flow-126bfafec9ff17c5ce39ff2e646cea4e.png"},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);