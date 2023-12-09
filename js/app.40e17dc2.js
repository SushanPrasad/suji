(function(){"use strict";var t=[,function(t,n,e){var a=e(963),o=e(252),r=e(577);const l={className:"container"},i=(0,o._)("div",{className:"title"},[(0,o._)("h1",null,"EMI CALCULATOR"),(0,o._)("p",null,"Name: SUSHAN PRASAD"),(0,o._)("p",null,"Mail: sushansujipro@gmail.com"),(0,o._)("p",null,"Contact: +91 9344855574 ")],-1),u={className:"emi"},s=(0,o._)("label",{for:"loan-amount"},"Home Loan Amount:",-1),c=(0,o._)("label",{for:"interest-rate"},"Interest Rate:",-1),h=(0,o._)("label",{for:"loan-tenure"},"Loan Tenure:",-1),m=(0,o._)("h3",null,"Result:",-1),f={ref:"chart"};function p(t,n,e,p,d,b){return(0,o.wg)(),(0,o.iD)("div",l,[i,(0,o._)("div",u,[s,(0,o.wy)((0,o._)("input",{id:"loan-amount","onUpdate:modelValue":n[0]||(n[0]=t=>d.loanAmount=t),type:"number"},null,512),[[a.nr,d.loanAmount]]),c,(0,o.wy)((0,o._)("input",{id:"interest-rate","onUpdate:modelValue":n[1]||(n[1]=t=>d.interestRate=t),type:"number"},null,512),[[a.nr,d.interestRate]]),h,(0,o.wy)((0,o._)("input",{id:"loan-tenure","onUpdate:modelValue":n[2]||(n[2]=t=>d.loanTenure=t),type:"number"},null,512),[[a.nr,d.loanTenure]]),(0,o._)("button",{onClick:n[3]||(n[3]=(...t)=>b.calculateEMI&&b.calculateEMI(...t))},"Calculate EMI"),m,(0,o._)("p",null,"LOAN EMI: ₹ "+(0,r.zw)(d.emi),1),(0,o._)("p",null,"Total Interest Payable: ₹ "+(0,r.zw)(d.totalInterest),1),(0,o._)("p",null,"Total Payment: ₹ "+(0,r.zw)(d.totalPayment),1),(0,o._)("div",null,[(0,o._)("canvas",f,null,512)])])])}var d=e(809),b={data(){return{loanAmount:0,interestRate:0,loanTenure:0,emi:0,totalInterest:0,totalPayment:0}},methods:{calculateEMI(){const t=this.interestRate/100/12,n=12*this.loanTenure;this.emi=this.loanAmount*t*Math.pow(1+t,n)/(Math.pow(1+t,n)-1),this.totalInterest=this.emi*this.loanTenure*12-this.loanAmount,this.totalPayment=this.emi*this.loanTenure*12,this.updateChart()},updateChart(){const t=this.$refs.chart.getContext("2d");this.myChart&&this.myChart.destroy(),this.myChart=new d.ZP(t,{type:"bar",data:{labels:["Loan EMI","Total Interest","Total Payment"],datasets:[{label:"Amount",data:[this.emi,this.totalInterest,this.totalPayment],backgroundColor:["rgba(75, 192, 192, 0.2)"],borderColor:["rgba(75, 192, 192, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}}},y=e(744);const v=(0,y.Z)(b,[["render",p]]);var _=v;(0,a.ri)(_).mount("#app")}],n={};function e(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return t[a](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,a,o,r){if(!a){var l=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],r=t[c][2];for(var i=!0,u=0;u<a.length;u++)(!1&r||l>=r)&&Object.keys(e.O).every((function(t){return e.O[t](a[u])}))?a.splice(u--,1):(i=!1,r<l&&(l=r));if(i){t.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,o,r]}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var o,r,l=a[0],i=a[1],u=a[2],s=0;if(l.some((function(n){return 0!==t[n]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(u)var c=u(e)}for(n&&n(a);s<l.length;s++)r=l[s],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},a=self["webpackChunkcal"]=self["webpackChunkcal"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(1)}));a=e.O(a)})();
//# sourceMappingURL=app.40e17dc2.js.map