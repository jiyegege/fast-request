import{_ as e}from"./saveRequest.ac4861ee.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,e as s}from"./app.e3afebec.js";const i={},c=s(`<h1 id="保存请求" tabindex="-1"><a class="header-anchor" href="#保存请求" aria-hidden="true">#</a> 保存请求</h1><div class="custom-container tip"><p class="custom-container-title">特别说明</p><p><strong>API 取名</strong>：如果 api 使用了 swagger 注解 <code>@ApiOperation(&quot;xxx&quot;)</code>，则 api 取名 xxx，如果没加 swagger 注解，则使用 javadoc 作为 api 的名称，否则将取名 New Request</p><div class="language-text" data-ext="text"><pre class="language-text"><code>if (@ApiOperation(&quot;xxx&quot;))
    apiName = xxx
else if(java doc)
    apiName = java doc
else
    apiName = New Request
</code></pre></div></div><p><img src="`+e+'" alt="example_download" loading="lazy"></p>',3),n=[c];function r(d,p){return t(),o("div",null,n)}const m=a(i,[["render",r],["__file","saveRequest.html.vue"]]);export{m as default};
