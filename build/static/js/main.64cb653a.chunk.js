(this.webpackJsonphclwebview=this.webpackJsonphclwebview||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),i=a.n(s),r=a(6),n=a.n(r),o=a(2),l=a(3),d=a(10),j=a(9),h=a(4),m=a.n(h),b=a(7),u=a(8),O=new(function(){function e(){Object(o.a)(this,e),this._key=void 0}return Object(l.a)(e,[{key:"init",value:function(e){fetch("/init",{method:"GET"}).then((function(t){t.json().then((function(t){Object.keys(t).forEach((function(e){var a=new Uint8Array(t[e].image[0].data),c=new Blob([a],{type:"image/jpeg"});t[e].image[0]=URL.createObjectURL(c)})),e(t)}))})).catch((function(e){console.log(e)}))}},{key:"stripePublishKey",value:function(){var e=this;this._key||fetch("/stripe",{method:"GET"}).then((function(t){t.text().then((function(t){e._key=t}))})).catch((function(e){console.log(e)}))}},{key:"stripePayment",value:function(){var e=Object(b.a)(m.a.mark((function e(t){var a,c,s,i,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("tf",t),e.next=5,fetch("/stripe_payment",{method:"POST",body:a});case 5:return c=e.sent,e.next=8,c.json();case 8:return s=e.sent,e.next=11,Object(u.a)(this._key);case 11:return i=e.sent,e.next=14,i.redirectToCheckout({sessionId:s.id});case 14:(r=e.sent).error&&alert(r.error.message),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error:",e.t0);case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),v=a.p+"static/media/cheerink.e33ad99c.jpg",p=a.p+"static/media/october.760fce59.jpg",x=a.p+"static/media/drink.b5653a9d.jpg",f=a.p+"static/media/inktime.146ba03b.jpg",w=a.p+"static/media/kcam.8001b2ea.jpg",N=a.p+"static/media/yee.d854ece5.jpg",g=a.p+"static/media/rui.f29ea13d.jpg",k=a.p+"static/media/raice.f8c54b75.jpg",y="banner",T="tattoo_studio",A="tattoo_artist",S="tattoo_flash",_="Home",C="Tattoo Studio",D="Tattoo Artist",E="Tattoo Flash",I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){O.stripePublishKey()}},{key:"renderHeader",value:function(){var e=function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e,className:"page-scroll",children:t})})};return Object(c.jsx)("nav",{id:"header",className:"navbar navbar-default navbar-fixed-top on",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"navbar-header",children:[Object(c.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[Object(c.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(c.jsx)("span",{className:"icon-bar"}),Object(c.jsx)("span",{className:"icon-bar"})," ",Object(c.jsx)("span",{className:"icon-bar"})]}),Object(c.jsxs)("a",{className:"navbar-brand page-scroll",href:"#".concat(y),children:[Object(c.jsx)("i",{className:"fa fa-angellist fa-rotate-90"})," CLPEDIA"]})]}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:Object(c.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[e("#".concat(y),_),e("#".concat(T),C),e("#".concat(A),D),e("#".concat(S),E)]})})]})})}},{key:"renderBanner",value:function(){return Object(c.jsx)("header",{id:y,children:Object(c.jsx)("div",{className:"intro text-center",children:Object(c.jsx)("div",{className:"overlay",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"intro-text",children:[Object(c.jsx)("h1",{children:"WELCOME TO CLPEDIA TATTOO WEB"}),Object(c.jsx)("p",{children:"TATTOO SHOWCASE ACROSS MALAYSIA."})]})})})})})})}},{key:"renderTattooStudio",value:function(){var e=function(e,t,a,s){return Object(c.jsxs)("div",{className:"col-xs-6 col-md-3",children:[Object(c.jsx)("img",{src:e,alt:"...",className:"img-circle team-img"}),Object(c.jsx)("h4",{children:t}),Object(c.jsx)("div",{className:"social",children:Object(c.jsxs)("ul",{className:"social-media-icon",children:[Object(c.jsx)("a",{href:a,target:"_blank",className:"social-media-icon-margin",children:Object(c.jsx)("div",{className:"fa fa-facebook"})}),Object(c.jsx)("a",{href:s,target:"_blank",className:"social-media-icon-margin",children:Object(c.jsx)("div",{className:"fa fa-instagram"})})]})})]})};return Object(c.jsx)("div",{id:T,className:"text-center",children:Object(c.jsx)("div",{className:"tattoo_studio",children:Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"col-md-8 col-md-offset-2 section-title",children:[Object(c.jsx)("h2",{children:C}),Object(c.jsx)("p",{children:"Tattoo Studio Across Malaysia."}),Object(c.jsx)("p",{children:"Personal Favourite, Do Check Them Out!"})]}),Object(c.jsxs)("div",{className:"row",children:[e(v,"Cheer Ink Tattoo Studio","https://www.facebook.com/cheerinktattoo/","https://www.instagram.com/cheerinktattoo/"),e(p,"October Tattoo Studio","https://www.facebook.com/octobertattoostudio/","https://www.instagram.com/october.tattoo/"),e(x,"Dr.Ink Tattoo Studio","https://www.facebook.com/thedrinktattoobar/","https://www.instagram.com/dr.inktattoostudio/"),e(f,"Inktime Tattoo Studio","https://www.facebook.com/inktimestudio/","https://www.instagram.com/inktime_studio/")]})]})})})})}},{key:"renderTattooArtist",value:function(){var e=function(e,t,a,s){return Object(c.jsx)("div",{className:"col-md-3 col-sm-6 team",children:Object(c.jsxs)("div",{className:"thumbnail",children:[Object(c.jsx)("a",{href:e,target:"_blank",children:Object(c.jsx)("img",{src:t,alt:"...",className:"img-circle team-img"})}),Object(c.jsxs)("div",{className:"caption",children:[Object(c.jsx)("h4",{children:a}),Object(c.jsx)("p",{children:s})]})]})})};return Object(c.jsx)("div",{id:A,className:"text-center",children:Object(c.jsx)("div",{className:"tattoo_artist",children:Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"col-md-8 col-md-offset-2 section-title",children:[Object(c.jsx)("h2",{children:D}),Object(c.jsx)("p",{children:"Tattoo Artist Across Malaysia."}),Object(c.jsx)("p",{children:"Personal Favourite, Do Check Them Out!"})]}),Object(c.jsxs)("div",{className:"row",children:[e("https://www.instagram.com/kcamlow_tattoo/",w,"Kcam","Cheer Ink Tattoo Studio"),e("https://www.instagram.com/yee_tattooist/",N,"Yee","October Tattoo Studio"),e("https://www.instagram.com/rui_tattooist/",g,"Rui","Dr.Ink Tattoo Studio"),e("https://www.instagram.com/tattooist_raice/",k,"Raice","Inktime Tattoo Studio")]})]})})})})}},{key:"renderTattooFlash",value:function(){var e=this;return Object(c.jsx)("div",{id:S,children:Object(c.jsx)("div",{className:"tattoo_flash",children:Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"col-md-8 col-md-offset-2 section-title text-center",children:[Object(c.jsx)("h2",{children:E}),Object(c.jsx)("p",{children:"Tattoo Flash Available From Artist."}),Object(c.jsx)("p",{children:"Grab Them Now, Every Tattoo Is Unique!"})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"portfolio-items",children:Object.keys(this.props.productRawData).map((function(t,a){return s=t,i=e.props.productRawData[t].image,r=e.props.productRawData[t].name,n=e.props.productRawData[t].description,Object(c.jsxs)("div",{className:"col-sm-6 col-md-3 col-lg-3 web",children:[Object(c.jsx)("div",{className:"portfolio-item",children:Object(c.jsx)("div",{className:"hover-bg",children:Object(c.jsxs)("a",{href:i,children:[Object(c.jsxs)("div",{className:"hover-text",children:[Object(c.jsx)("h4",{children:r}),Object(c.jsx)("small",{children:n})]}),Object(c.jsx)("img",{src:i,className:"img-responsive"})]})})}),Object(c.jsx)("div",{style:{cursor:"pointer"},onClick:function(){O.stripePayment(s)},children:Object(c.jsx)("a",{children:"Buy Now"})})]});var s,i,r,n}))})})]})})})})}},{key:"renderFooter",value:function(){return Object(c.jsx)("nav",{id:"footer",className:"navbar navbar-fixed-bottom",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"navbar-header",children:Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)("p",{children:"Copyright \xa9 2021 Clpedia. All rights reserved. Disclaimer: All graphic assets weren't mine."}),Object(c.jsx)("div",{className:"fb-like","data-href":"https://developers.facebook.com/docs/plugins/","data-width":"","data-layout":"button","data-action":"like","data-size":"small","data-share":"true"})]})})})})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[this.renderHeader(),this.renderBanner(),this.renderTattooStudio(),this.renderTattooArtist(),this.renderTattooFlash(),this.renderFooter()]})}}]),a}(i.a.Component);a(17),a(18),a(19),a(20);O.init((function(e){n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(I,{productRawData:e})}),document.getElementById("root"))}))}},[[21,1,2]]]);
//# sourceMappingURL=main.64cb653a.chunk.js.map