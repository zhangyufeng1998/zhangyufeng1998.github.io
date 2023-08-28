const n=JSON.parse('{"key":"v-b237e988","path":"/posts/rust/rust%E5%85%A5%E9%97%A8/12-.html","title":"12.项目实例-命令行程序","lang":"zh-CN","frontmatter":{"title":"12.项目实例-命令行程序","date":"2023-05-16T00:00:00.000Z","icon":"rust","category":"rust","description":"12.1 接收命令行参数 use std::env; // collect fn main() { let args: Vec&lt;String&gt; = env::args().collect(); let query = &amp;args[1]; let filename = &amp;args[2]; println!(\\"Search for {}\\",query); println!(\\"In file {}\\",filename); }","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/rust/rust%E5%85%A5%E9%97%A8/12-.html"}],["meta",{"property":"og:title","content":"12.项目实例-命令行程序"}],["meta",{"property":"og:description","content":"12.1 接收命令行参数 use std::env; // collect fn main() { let args: Vec&lt;String&gt; = env::args().collect(); let query = &amp;args[1]; let filename = &amp;args[2]; println!(\\"Search for {}\\",query); println!(\\"In file {}\\",filename); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-22T03:59:03.000Z"}],["meta",{"property":"article:author","content":"ZYF"}],["meta",{"property":"article:published_time","content":"2023-05-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-22T03:59:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12.项目实例-命令行程序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-22T03:59:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"12.1 接收命令行参数","slug":"_12-1-接收命令行参数","link":"#_12-1-接收命令行参数","children":[]},{"level":2,"title":"12.2 读取文件","slug":"_12-2-读取文件","link":"#_12-2-读取文件","children":[]},{"level":2,"title":"12.3 重构：改进模块和错误处理","slug":"_12-3-重构-改进模块和错误处理","link":"#_12-3-重构-改进模块和错误处理","children":[{"level":3,"title":"二进制程序关注点分离的指导性原则","slug":"二进制程序关注点分离的指导性原则","link":"#二进制程序关注点分离的指导性原则","children":[]},{"level":3,"title":"讲过上述拆分，留在main的功能有","slug":"讲过上述拆分-留在main的功能有","link":"#讲过上述拆分-留在main的功能有","children":[]},{"level":3,"title":"改进模块化","slug":"改进模块化","link":"#改进模块化","children":[]},{"level":3,"title":"错误处理改进","slug":"错误处理改进","link":"#错误处理改进","children":[]},{"level":3,"title":"将业务逻辑移到 lib.rs","slug":"将业务逻辑移到-lib-rs","link":"#将业务逻辑移到-lib-rs","children":[]}]},{"level":2,"title":"12.4 使用TDD（测试驱动开发）开发库功能","slug":"_12-4-使用tdd-测试驱动开发-开发库功能","link":"#_12-4-使用tdd-测试驱动开发-开发库功能","children":[{"level":3,"title":"测试驱动开发TDD（Test-Driven Development）","slug":"测试驱动开发tdd-test-driven-development","link":"#测试驱动开发tdd-test-driven-development","children":[]}]},{"level":2,"title":"12.5 使用环境变量","slug":"_12-5-使用环境变量","link":"#_12-5-使用环境变量","children":[]},{"level":2,"title":"12.6 将错误消息写入标准错误而不是标准输出","slug":"_12-6-将错误消息写入标准错误而不是标准输出","link":"#_12-6-将错误消息写入标准错误而不是标准输出","children":[{"level":3,"title":"标准输入和标准输出","slug":"标准输入和标准输出","link":"#标准输入和标准输出","children":[]}]}],"git":{"createdTime":1684727943000,"updatedTime":1684727943000,"contributors":[{"name":"zyf","email":"907392790@qq.com","commits":1}]},"readingTime":{"minutes":4.05,"words":1214},"filePathRelative":"posts/rust/rust入门/12-.md","localizedDate":"2023年5月16日","excerpt":"<h2> 12.1 接收命令行参数</h2>\\n<div class=\\"language-rust line-numbers-mode\\" data-ext=\\"rs\\"><pre class=\\"language-rust\\"><code><span class=\\"token keyword\\">use</span> <span class=\\"token namespace\\">std<span class=\\"token punctuation\\">::</span></span>env<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// collect</span>\\n\\n<span class=\\"token keyword\\">fn</span> <span class=\\"token function-definition function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> args<span class=\\"token punctuation\\">:</span> <span class=\\"token class-name\\">Vec</span><span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">String</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">=</span> <span class=\\"token namespace\\">env<span class=\\"token punctuation\\">::</span></span><span class=\\"token function\\">args</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">collect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> query <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>args<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> filename <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&amp;</span>args<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token macro property\\">println!</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Search for {}\\"</span><span class=\\"token punctuation\\">,</span>query<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token macro property\\">println!</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"In file {}\\"</span><span class=\\"token punctuation\\">,</span>filename<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};