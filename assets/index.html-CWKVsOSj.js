import{_ as s,c as a,a as n,o as e}from"./app-8FNTLmoy.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<p>单一职责原则，我们在设计类的时候尽量只负责一项功能，A类只负责功能A，B类只负责功能B，尽量避免A类即负责A功能又负责B功能，这样会导致代码混乱，容易产生bug</p><p>未使用单一职责原则代码</p><h4 id="vehicle类" tabindex="-1"><a class="header-anchor" href="#vehicle类"><span>Vehicle类</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Vehicle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">type </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">在公路上开</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="single类" tabindex="-1"><a class="header-anchor" href="#single类"><span>Single类</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Single</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        Vehicle</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> vehicle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Vehicle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        vehicle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">飞机</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        vehicle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">火车</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        vehicle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">轮船</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const p=s(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/principle/yj6zk4e0/","title":"单一职责","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"单一职责","icon":"mdi:tooltip-text-outline","description":"单一职责","createTime":"2024/09/03 11:24:35","tags":["principle"],"sidebar":"auto","permalink":"/principle/yj6zk4e0/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[],"readingTime":{"minutes":0.51,"words":154},"git":{"createdTime":1725503750000,"updatedTime":1725503750000,"contributors":[{"name":"Thank4","email":"1187036429@qq.com","commits":1}]},"filePathRelative":"notes/principle/SingleResponsibility.md"}`);export{p as comp,d as data};
