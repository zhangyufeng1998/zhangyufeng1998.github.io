const e=JSON.parse('{"key":"v-192faa03","path":"/posts/rust/rust%E5%85%A5%E9%97%A8/19-.html","title":"19.高级特性","lang":"zh-CN","frontmatter":{"title":"19.高级特性","date":"2023-05-28T00:00:00.000Z","icon":"rust","category":"rust","description":"19.1 不安全Rust 匹配命名变量 隐藏着第二个语言，它没有强制内存安全保证：Unsafe Rust 和不同的Rust一样，但提供了额外的“超能力” Unsafe Rust存在的原因 静态分析是保守的 使用Unsafe Rust：我知道自己在做什么，并承担相应风险 计算机本身就是不安全的，Rust需要能够进行底层系统编程 Unsafe超能力","head":[["meta",{"property":"og:url","content":"https://zhangyufeng19988.github.io/zyf/posts/rust/rust%E5%85%A5%E9%97%A8/19-.html"}],["meta",{"property":"og:title","content":"19.高级特性"}],["meta",{"property":"og:description","content":"19.1 不安全Rust 匹配命名变量 隐藏着第二个语言，它没有强制内存安全保证：Unsafe Rust 和不同的Rust一样，但提供了额外的“超能力” Unsafe Rust存在的原因 静态分析是保守的 使用Unsafe Rust：我知道自己在做什么，并承担相应风险 计算机本身就是不安全的，Rust需要能够进行底层系统编程 Unsafe超能力"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"ZYF"}],["meta",{"property":"article:published_time","content":"2023-05-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"19.高级特性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZYF\\",\\"url\\":\\"https://zhangyufeng19989.github.io\\",\\"email\\":\\"907392790@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"19.1 不安全Rust","slug":"_19-1-不安全rust","link":"#_19-1-不安全rust","children":[{"level":3,"title":"匹配命名变量","slug":"匹配命名变量","link":"#匹配命名变量","children":[]},{"level":3,"title":"Unsafe超能力","slug":"unsafe超能力","link":"#unsafe超能力","children":[]},{"level":3,"title":"解引用原始指针","slug":"解引用原始指针","link":"#解引用原始指针","children":[]},{"level":3,"title":"调用unsafe函数或方法","slug":"调用unsafe函数或方法","link":"#调用unsafe函数或方法","children":[]},{"level":3,"title":"创建unsafe代码的安全抽象","slug":"创建unsafe代码的安全抽象","link":"#创建unsafe代码的安全抽象","children":[]},{"level":3,"title":"使用extern 函数调用外部代码","slug":"使用extern-函数调用外部代码","link":"#使用extern-函数调用外部代码","children":[]},{"level":3,"title":"从其他语言调用Rust函数","slug":"从其他语言调用rust函数","link":"#从其他语言调用rust函数","children":[]},{"level":3,"title":"访问或修改一个可变静态变量","slug":"访问或修改一个可变静态变量","link":"#访问或修改一个可变静态变量","children":[]},{"level":3,"title":"静态变量","slug":"静态变量","link":"#静态变量","children":[]},{"level":3,"title":"常量与不可变静态变量的区别","slug":"常量与不可变静态变量的区别","link":"#常量与不可变静态变量的区别","children":[]},{"level":3,"title":"实现不安全的trait","slug":"实现不安全的trait","link":"#实现不安全的trait","children":[]},{"level":3,"title":"何时使用unsafe代码","slug":"何时使用unsafe代码","link":"#何时使用unsafe代码","children":[]}]},{"level":2,"title":"19.2 高级trait","slug":"_19-2-高级trait","link":"#_19-2-高级trait","children":[{"level":3,"title":"在Trait定义中使用关联类型来指定占位类型","slug":"在trait定义中使用关联类型来指定占位类型","link":"#在trait定义中使用关联类型来指定占位类型","children":[]},{"level":3,"title":"关联类型与泛型的区别","slug":"关联类型与泛型的区别","link":"#关联类型与泛型的区别","children":[]},{"level":3,"title":"默认泛型参数和运算符重载","slug":"默认泛型参数和运算符重载","link":"#默认泛型参数和运算符重载","children":[]},{"level":3,"title":"默认泛型参数的主要应用场景","slug":"默认泛型参数的主要应用场景","link":"#默认泛型参数的主要应用场景","children":[]},{"level":3,"title":"完全限定语法（Fully Qualified Syntax）如何调用同名方法","slug":"完全限定语法-fully-qualified-syntax-如何调用同名方法","link":"#完全限定语法-fully-qualified-syntax-如何调用同名方法","children":[]},{"level":3,"title":"使用supertrait来要求trait附带其他trait的功能","slug":"使用supertrait来要求trait附带其他trait的功能","link":"#使用supertrait来要求trait附带其他trait的功能","children":[]},{"level":3,"title":"使用newtype模式在外部类型上实现外部trait","slug":"使用newtype模式在外部类型上实现外部trait","link":"#使用newtype模式在外部类型上实现外部trait","children":[]}]},{"level":2,"title":"19.3 高级类型","slug":"_19-3-高级类型","link":"#_19-3-高级类型","children":[{"level":3,"title":"使用newtype模式实现类型的安全和抽象","slug":"使用newtype模式实现类型的安全和抽象","link":"#使用newtype模式实现类型的安全和抽象","children":[]},{"level":3,"title":"使用类型的别名创建同义词","slug":"使用类型的别名创建同义词","link":"#使用类型的别名创建同义词","children":[]},{"level":3,"title":"Never 类型","slug":"never-类型","link":"#never-类型","children":[]},{"level":3,"title":"动态大小和sized trait","slug":"动态大小和sized-trait","link":"#动态大小和sized-trait","children":[]},{"level":3,"title":"Rust使用动态大小类型的通用方式","slug":"rust使用动态大小类型的通用方式","link":"#rust使用动态大小类型的通用方式","children":[]},{"level":3,"title":"另外一种动态大小的类型：trait","slug":"另外一种动态大小的类型-trait","link":"#另外一种动态大小的类型-trait","children":[]},{"level":3,"title":"Sized Trait","slug":"sized-trait","link":"#sized-trait","children":[]},{"level":3,"title":"?Sized trait约束","slug":"sized-trait约束","link":"#sized-trait约束","children":[]}]},{"level":2,"title":"19.4 高级函数和闭包","slug":"_19-4-高级函数和闭包","link":"#_19-4-高级函数和闭包","children":[{"level":3,"title":"函数指针","slug":"函数指针","link":"#函数指针","children":[]},{"level":3,"title":"函数指针与闭包的不同","slug":"函数指针与闭包的不同","link":"#函数指针与闭包的不同","children":[]},{"level":3,"title":"返回闭包","slug":"返回闭包","link":"#返回闭包","children":[]}]},{"level":2,"title":"19.5 宏","slug":"_19-5-宏","link":"#_19-5-宏","children":[{"level":3,"title":"函数和宏的差别","slug":"函数和宏的差别","link":"#函数和宏的差别","children":[]},{"level":3,"title":"基于属性生成代码的过程宏","slug":"基于属性生成代码的过程宏","link":"#基于属性生成代码的过程宏","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":11.42,"words":3426},"filePathRelative":"posts/rust/rust入门/19-.md","localizedDate":"2023年5月28日","excerpt":"<h2> 19.1 不安全Rust</h2>\\n<h3> 匹配命名变量</h3>\\n<ul>\\n<li>隐藏着第二个语言，它没有强制内存安全保证：Unsafe Rust\\n<ul>\\n<li>和不同的Rust一样，但提供了额外的“超能力”</li>\\n</ul>\\n</li>\\n<li>Unsafe Rust存在的原因\\n<ul>\\n<li>静态分析是保守的\\n<ul>\\n<li>使用Unsafe Rust：我知道自己在做什么，并承担相应风险</li>\\n</ul>\\n</li>\\n<li>计算机本身就是不安全的，Rust需要能够进行底层系统编程</li>\\n</ul>\\n</li>\\n</ul>\\n<h3> Unsafe超能力</h3>","autoDesc":true}');export{e as data};