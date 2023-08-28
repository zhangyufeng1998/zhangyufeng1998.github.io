const e=JSON.parse('{"key":"v-7a7cf840","path":"/posts/rust/rust%E5%85%A5%E9%97%A8/16-.html","title":"16.并发","lang":"zh-CN","frontmatter":{"title":"16.并发","date":"2023-05-24T00:00:00.000Z","icon":"rust","category":"rust","description":"并发 Concurrent：程序不同部分之间独立的执行 Parallel：程序的不同部分同时进行 Rust无畏并发：允许你编写没有细微Bug的代码，并在不引入新Bug的情况下易于重构 16.1 使用线程同时运行代码 进程与线程 在大部分OS里，代码运行在**进程（process）**中，OS同时管理多个进程 在你的程序里，各独立部分可以同时运行，运行这些独立部分的就是线程（thread） 多线程运行 提升性能表现 增加复杂性：无法保障各线程的执行顺序","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/rust/rust%E5%85%A5%E9%97%A8/16-.html"}],["meta",{"property":"og:title","content":"16.并发"}],["meta",{"property":"og:description","content":"并发 Concurrent：程序不同部分之间独立的执行 Parallel：程序的不同部分同时进行 Rust无畏并发：允许你编写没有细微Bug的代码，并在不引入新Bug的情况下易于重构 16.1 使用线程同时运行代码 进程与线程 在大部分OS里，代码运行在**进程（process）**中，OS同时管理多个进程 在你的程序里，各独立部分可以同时运行，运行这些独立部分的就是线程（thread） 多线程运行 提升性能表现 增加复杂性：无法保障各线程的执行顺序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ZYF"}],["meta",{"property":"article:published_time","content":"2023-05-24T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16.并发\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-24T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"并发","slug":"并发","link":"#并发","children":[]},{"level":2,"title":"16.1 使用线程同时运行代码","slug":"_16-1-使用线程同时运行代码","link":"#_16-1-使用线程同时运行代码","children":[{"level":3,"title":"进程与线程","slug":"进程与线程","link":"#进程与线程","children":[]},{"level":3,"title":"多线程可导致的问题","slug":"多线程可导致的问题","link":"#多线程可导致的问题","children":[]},{"level":3,"title":"实现线程的方式","slug":"实现线程的方式","link":"#实现线程的方式","children":[]},{"level":3,"title":"通过spawn创建新的线程","slug":"通过spawn创建新的线程","link":"#通过spawn创建新的线程","children":[]},{"level":3,"title":"通过join Handle来等待所有现成的完成","slug":"通过join-handle来等待所有现成的完成","link":"#通过join-handle来等待所有现成的完成","children":[]},{"level":3,"title":"使用move闭包","slug":"使用move闭包","link":"#使用move闭包","children":[]}]},{"level":2,"title":"16.2 使用消息传递来跨线程传递数据","slug":"_16-2-使用消息传递来跨线程传递数据","link":"#_16-2-使用消息传递来跨线程传递数据","children":[{"level":3,"title":"Channel","slug":"channel","link":"#channel","children":[]},{"level":3,"title":"创建Channel","slug":"创建channel","link":"#创建channel","children":[]},{"level":3,"title":"发送端的send方法","slug":"发送端的send方法","link":"#发送端的send方法","children":[]},{"level":3,"title":"接收端的方法","slug":"接收端的方法","link":"#接收端的方法","children":[]},{"level":3,"title":"channel和所有权转移","slug":"channel和所有权转移","link":"#channel和所有权转移","children":[]},{"level":3,"title":"发送多个值","slug":"发送多个值","link":"#发送多个值","children":[]},{"level":3,"title":"通过克隆创建多个发送者","slug":"通过克隆创建多个发送者","link":"#通过克隆创建多个发送者","children":[]}]},{"level":2,"title":"16.3 共享状态的并发","slug":"_16-3-共享状态的并发","link":"#_16-3-共享状态的并发","children":[{"level":3,"title":"使用共享来实现并发","slug":"使用共享来实现并发","link":"#使用共享来实现并发","children":[]},{"level":3,"title":"使用Mutex来每次只允许一个线程来访问数据","slug":"使用mutex来每次只允许一个线程来访问数据","link":"#使用mutex来每次只允许一个线程来访问数据","children":[]},{"level":3,"title":"Mutex的两条规则","slug":"mutex的两条规则","link":"#mutex的两条规则","children":[]},{"level":3,"title":"Mutex<T>的API","slug":"mutex-t-的api","link":"#mutex-t-的api","children":[]},{"level":3,"title":"多线程共享Mutex<T>","slug":"多线程共享mutex-t","link":"#多线程共享mutex-t","children":[]},{"level":3,"title":"使用Arc<T>来进行原子引用计数","slug":"使用arc-t-来进行原子引用计数","link":"#使用arc-t-来进行原子引用计数","children":[]},{"level":3,"title":"RefCell和Rc对比Mutex和Arc","slug":"refcell和rc对比mutex和arc","link":"#refcell和rc对比mutex和arc","children":[]}]},{"level":2,"title":"16.4 通过Send和Sync Trait来扩展并发","slug":"_16-4-通过send和sync-trait来扩展并发","link":"#_16-4-通过send和sync-trait来扩展并发","children":[{"level":3,"title":"Send和Sync trait","slug":"send和sync-trait","link":"#send和sync-trait","children":[]},{"level":3,"title":"Send允许线程间转移所有权","slug":"send允许线程间转移所有权","link":"#send允许线程间转移所有权","children":[]},{"level":3,"title":"Sync 允许从多线程访问","slug":"sync-允许从多线程访问","link":"#sync-允许从多线程访问","children":[]},{"level":3,"title":"手动实现Send和Sync是不安全的","slug":"手动实现send和sync是不安全的","link":"#手动实现send和sync是不安全的","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.37,"words":2211},"filePathRelative":"posts/rust/rust入门/16-.md","localizedDate":"2023年5月24日","excerpt":"<h2> 并发</h2>\\n<ul>\\n<li>Concurrent：程序不同部分之间<strong>独立的执行</strong></li>\\n<li>Parallel：程序的不同部分<strong>同时进行</strong></li>\\n<li>Rust无畏并发：允许你编写没有细微Bug的代码，并在不引入新Bug的情况下易于重构</li>\\n</ul>\\n<h2> 16.1 使用线程同时运行代码</h2>\\n<h3> 进程与线程</h3>\\n<ul>\\n<li>在大部分OS里，代码运行在**进程（process）**中，OS同时管理多个进程</li>\\n<li>在你的程序里，各独立部分可以同时运行，运行这些独立部分的就是<strong>线程（thread）</strong></li>\\n<li>多线程运行\\n<ul>\\n<li>提升性能表现</li>\\n<li>增加复杂性：无法保障各线程的执行顺序</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};