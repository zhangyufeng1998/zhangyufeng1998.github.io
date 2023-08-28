import{_ as n,X as s,Y as a,a2 as e}from"./framework-a8949fcd.js";const t={},p=e(`<h2 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> <code>vector</code></h2><ul><li>变长数组，倍增的思想 <ul><li>系统为某一程序分配空间时，所需时间与空间大小无关，与申请次数有关</li><li>每一次容量不够的时候，就把原来的容量乘2，然后把原来的数据复制过来</li></ul></li><li><code>size()</code> 返回元素个数</li><li><code>empty()</code> 返回是否为空</li><li><code>clear()</code> 清空</li><li><code>print()</code>/<code>back()</code></li><li><code>push_back()</code>/<code>pop_back()</code></li><li><code>begin()</code>/<code>end()</code></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 定义长度为10的vector 每个元素为3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> a<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> a<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token comment">// a.begin() = a[0]</span>
    <span class="token comment">// a.end() = a[a.size()]</span>
    <span class="token comment">// vector&lt;int&gt;::iterator 可以替换成auto</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>iterator i <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> a<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>i <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// auto可以自动推断变量类型</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> x<span class="token operator">:</span> a<span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pair-int-int" tabindex="-1"><a class="header-anchor" href="#pair-int-int" aria-hidden="true">#</a> <code>pair&lt;int,int&gt;</code></h2><ul><li>存储一个二元组</li><li>first，第一个元素</li><li>second，第二个元素</li><li>支持比较运算，按字典序</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> string<span class="token operator">&gt;</span> p<span class="token punctuation">;</span>
    pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> string<span class="token operator">&gt;</span> s<span class="token punctuation">;</span>

    <span class="token comment">// 初始化</span>
    p <span class="token operator">=</span> <span class="token function">make_pair</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;zyf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;zyf&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>first <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">.</span>second <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    
    <span class="token comment">// 使用piar存储三个不同的东西</span>
    pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> z<span class="token punctuation">;</span>
    z <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> z<span class="token punctuation">.</span>first <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> z<span class="token punctuation">.</span>second<span class="token punctuation">.</span>first <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span> <span class="token operator">&lt;&lt;</span> z<span class="token punctuation">.</span>second<span class="token punctuation">.</span>second <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> <code>string</code></h2><ul><li>字符串</li><li><code>substr()</code>,<code>c_str()</code></li><li><code>size()</code> 返回字母个数</li><li><code>empty()</code> 返回是否为空</li><li><code>clear()</code> 清空</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    string a <span class="token operator">=</span> <span class="token string">&quot;zyf&quot;</span><span class="token punctuation">;</span>
    a <span class="token operator">+=</span> <span class="token string">&quot;stc&quot;</span><span class="token punctuation">;</span>
    a <span class="token operator">+=</span> <span class="token char">&#39;!&#39;</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// substr第一个参数为起始位置，第二个参数为中止位置</span>
    <span class="token comment">// 第二个参数省略就是从第一个参数到最后</span>
    cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> <code>queue</code></h2><ul><li>队列</li><li><code>push()</code>,对位插入一个元素</li><li><code>front()</code>,返回队头元素</li><li><code>back()</code>,返回队尾元素</li><li><code>pop</code>,弹出队头元素</li><li><code>size()</code>,<code>empty()</code></li><li>没有<code>clear()</code></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;queue&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> q<span class="token punctuation">;</span>
    <span class="token comment">// 清空q</span>
    q <span class="token operator">=</span> <span class="token generic-function"><span class="token function">queue</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="priority-queue" tabindex="-1"><a class="header-anchor" href="#priority-queue" aria-hidden="true">#</a> <code>priority_queue</code></h2><ul><li>优先队列(堆)默认是大根堆</li><li><code>push()</code>,插入一个元素</li><li><code>top()</code>,返回堆顶元素</li><li><code>pop</code>,弹出堆顶元素</li></ul><h2 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> <code>stack</code></h2><ul><li>栈</li><li><code>push()</code>,栈顶插入元素</li><li><code>top()</code>,返回栈顶元素</li><li><code>pop</code>,弹出栈顶元素</li><li><code>size()</code>,<code>empty()</code></li></ul><h2 id="deque" tabindex="-1"><a class="header-anchor" href="#deque" aria-hidden="true">#</a> <code>deque</code></h2><ul><li>加强vector</li><li>双端队列，支持随机访问</li><li><code>empty()</code></li><li><code>size()</code></li><li><code>clear()</code></li><li><code>front()</code>返回第一个元素</li><li><code>back()</code>返回最后一个元素</li><li><code>push_back()</code>/<code>pop_back()</code></li><li><code>push_front()</code>/<code>pop_front</code></li><li>支持随机寻址</li><li><code>begin()</code>/<code>end()</code></li></ul><h2 id="set-map-multiset-mutimap" tabindex="-1"><a class="header-anchor" href="#set-map-multiset-mutimap" aria-hidden="true">#</a> <code>set</code>,<code>map</code>,<code>multiset</code>,<code>mutimap</code></h2><ul><li>基于平衡二叉树（红黑树）实现，动态维护有序序列</li><li><code>size()</code></li><li><code>empty()</code></li><li><code>clear()</code></li><li><code>begin()</code> <code>end()</code> ++,-- 返回前驱和后继</li><li><code>set</code> <code>multiset</code><ul><li><code>insert()</code> 插入一个数</li><li><code>find()</code> 查找一个数</li><li><code>count()</code> 返回某一个数的个数</li><li><code>earse()</code><ul><li>输入一个数x，删除所有x O（k+logn）k为x的个数</li><li>输入一个迭代器，删除这个迭代器</li></ul></li><li><code>lower_bound()/upper_bound()</code><ul><li><code>lower_bound(x)</code> 返回大于等于x的最小数的迭代器</li><li><code>upper_bound(x)</code> 返回大于x的最小的数的迭代器</li></ul></li></ul></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不可以有重复元素</span>
    set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> S<span class="token punctuation">;</span>
    <span class="token comment">// 可以有重复元素</span>
    multiset<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> MS<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>map</code> <code>multimap</code><ul><li><p><code>insert()</code> 插入的数是一个pair</p></li><li><p><code>erase()</code> 输入的参数是pair或迭代器</p></li><li><p><code>find()</code></p></li><li><p><code>[]</code> 时间复杂的是O（logn）</p><ul><li><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">&gt;</span> a<span class="token punctuation">;</span>
a<span class="token punctuation">[</span><span class="token string">&quot;zyf&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span><span class="token string">&quot;zyf&quot;</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>lower_bound()/upper_bound()</code></p></li></ul></li></ul><h2 id="unordered-set-unordered-map-unordered-multiset-unordered-multimap" tabindex="-1"><a class="header-anchor" href="#unordered-set-unordered-map-unordered-multiset-unordered-multimap" aria-hidden="true">#</a> <code>unordered_set</code>,<code>unordered_map</code>,<code>unordered_multiset</code>,<code>unordered_multimap</code></h2><ul><li>基于哈希表实现</li><li>和上面类似，增删改查的时间复杂度是O（1）</li><li>缺点是不支持<code>lower_bound()/upper_bound()</code></li></ul><h2 id="bitset" tabindex="-1"><a class="header-anchor" href="#bitset" aria-hidden="true">#</a> <code>bitset</code></h2><ul><li>压位</li></ul>`,27),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","STL.html.vue"]]);export{d as default};