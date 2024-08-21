(this["webpackJsonpjobby-app"]=this["webpackJsonpjobby-app"]||[]).push([[0],{40:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(31),i=s.n(n),o=s(6),r=s(4),l=s(10),j=s(13),b=s(14),d=s(15),m=s(17),u=s(16),h=s(7),p=s.n(h),O=(s(40),s(1)),x=function(e){function t(){var e;Object(b.a)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=Object(m.a)(this,t,[].concat(a))).state={userUserName:"",userPassword:"",iserror:!1,errorMsg:""},e.onUserNameChange=function(t){e.setState({userUserName:t.target.value})},e.onUserPassChange=function(t){e.setState({userPassword:t.target.value})},e.onSubmitSuccess=function(t){var s=e.props.history;p.a.set("jwt_token",t,{expires:30,path:"/JobbyApp-ReactJS"}),s.replace("/JobbyApp-ReactJS/")},e.onSubmitFailure=function(t){console.log(t),e.setState({iserror:!0,errorMsg:t})},e.onClickLogin=function(){var t=Object(j.a)(Object(l.a)().mark((function t(s){var a,c,n,i,o,r,j;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),a=e.state,c=a.userUserName,n=a.userPassword,i={username:c,password:n},o={method:"POST",body:JSON.stringify(i)},t.next=7,fetch("https://apis.ccbp.in/login",o);case 7:return r=t.sent,t.next=10,r.json();case 10:j=t.sent,!0===r.ok?e.onSubmitSuccess(j.jwt_token):e.onSubmitFailure(j.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userUserName,s=e.userPassword,a=e.iserror,c=e.errorMsg;return void 0!==p.a.get("jwt_token")?Object(O.jsx)(r.a,{to:"/JobbyApp-ReactJS/"}):Object(O.jsx)("div",{className:"LoginRoute-bg",children:Object(O.jsxs)("div",{className:"LoginRoute-card",children:[Object(O.jsx)("div",{className:"LoginRoute-img-con",children:Object(O.jsx)("img",{alt:"website logos",src:"https://assets.ccbp.in/frontend/react-js/logo-img.png "})}),Object(O.jsxs)("form",{className:"LoginRoute-form",children:[Object(O.jsxs)("div",{className:"LoginRoute-input-con",children:[Object(O.jsx)("label",{className:"LoginRoute-label",htmlFor:"userName",children:"USERNAME"}),Object(O.jsx)("input",{value:t,onChange:this.onUserNameChange,className:"LoginRoute-input",id:"userName",placeholder:"Username",type:"text"})]}),Object(O.jsxs)("div",{className:"LoginRoute-input-con",children:[Object(O.jsx)("label",{className:"LoginRoute-label",htmlFor:"password",children:"PASSWORD"}),Object(O.jsx)("input",{value:s,onChange:this.onUserPassChange,className:"LoginRoute-input",id:"password",placeholder:"Password",type:"password"})]}),Object(O.jsxs)("div",{className:"LoginRoute-btn-con",children:[Object(O.jsx)("button",{onClick:this.onClickLogin,className:"LoginRoute-btn",type:"submit",children:"Login"}),a&&Object(O.jsxs)("p",{className:"error-message",children:["*",c]})]})]})]})})}}])}(a.Component),f=x,g=s(18),N=s(24),y=s(33),v=(s(47),Object(r.g)((function(e){var t=function(){p.a.remove("jwt_token"),e.history.replace("/JobbyApp-ReactJS/login")};return Object(O.jsxs)("ul",{className:"header-container",children:[Object(O.jsx)(o.b,{to:"/JobbyApp-ReactJS",children:Object(O.jsx)("li",{children:Object(O.jsx)("img",{className:"header-logo",alt:"website logos",src:"https://assets.ccbp.in/frontend/react-js/logo-img.png "})})}),Object(O.jsxs)("div",{className:"hl",children:[Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{className:"header-links",to:"/JobbyApp-ReactJS",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{className:"header-links",to:"/JobbyApp-ReactJS/jobs",children:"Jobs"})}),Object(O.jsxs)("div",{className:"header-iconCon",children:[Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{className:"header-icons",to:"/JobbyApp-ReactJS/",children:Object(O.jsx)(g.a,{})})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{className:"header-icons",to:"/JobbyApp-ReactJS/jobs",children:Object(O.jsx)(N.a,{})})})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:t,type:"button",className:"LogoutRoute-btn",children:"Logout"}),Object(O.jsxs)("button",{onClick:t,type:"button",className:"logout-icon",children:[Object(O.jsx)(y.a,{})," LogOut"]})]})]})}))),S=(s(48),function(){return Object(O.jsxs)("div",{className:"home-contaner",children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{className:"home-info-con",children:[Object(O.jsx)("h1",{className:"home-head",children:"Find The Job That Fits Your Life"}),Object(O.jsx)("p",{className:"home-para",children:"Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential."}),Object(O.jsx)(o.b,{to:"/JobbyApp-ReactJS/jobs",children:Object(O.jsx)("button",{className:"home-find-btn ",type:"button",children:"Find Jobs"})})]})]})}),J=s(20),k=s.n(J),w=(s(67),"INITIAL"),R="SUCCESS",I="FAILURE",A="LOADING",C=function(e){function t(){var e;Object(b.a)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=Object(m.a)(this,t,[].concat(a))).state={apiStatus:w,profileData:""},e.getProfileDetails=Object(j.a)(Object(l.a)().mark((function t(){var s,a,c,n,i;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:A}),s=p.a.get("jwt_token"),a={headers:{Authorization:"Bearer ".concat(s)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/profile",a);case 6:return c=t.sent,t.next=9,c.json();case 9:n=t.sent,i={name:n.profile_details.name,profileImageUrl:n.profile_details.profile_image_url,bio:n.profile_details.short_bio},!0===c.ok?e.setState({apiStatus:R,profileData:i}):401===c.status&&e.setState({apiStatus:I});case 12:case"end":return t.stop()}}),t)}))),e.onClickRetryBtn=function(){e.getProfileDetails()},e.renderProfileLoadingView=function(){return Object(O.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(O.jsx)(k.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderProfileFailureView=function(){return Object(O.jsx)("div",{className:"profile-failure-con",children:Object(O.jsx)("button",{onClick:e.onClickRetryBtn,type:"button",className:"profile-failure-btn",children:"Retry"})})},e.renderProfileSuccessView=function(){var t=e.state.profileData,s=t.name,a=t.profileImageUrl,c=t.bio;return Object(O.jsxs)("div",{className:"profile-card",children:[Object(O.jsx)("img",{className:"profile-card-img",alt:"profile",src:a}),Object(O.jsx)("h1",{className:"profile-card-head",children:s}),Object(O.jsx)("p",{className:"profile-card-para",children:c})]})},e.rederProfileData=function(){switch(e.state.apiStatus){case A:return e.renderProfileLoadingView();case I:return e.renderProfileFailureView();case R:return e.renderProfileSuccessView();default:return null}},e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getProfileDetails()}},{key:"render",value:function(){return Object(O.jsx)("div",{children:this.rederProfileData()})}}])}(a.Component),L=C,_=s(21),D=s(22),T=(s(68),function(e){var t=e.jobData,s=t.companyLogoUrl,a=t.employmentType,c=t.jobDescription,n=t.location,i=t.packagePerAnnum,r=t.title,l=t.rating,j=t.id;return Object(O.jsx)(o.b,{to:"/JobbyApp-ReactJS/jobs/".concat(j),className:"jobitem-link",children:Object(O.jsxs)("li",{className:"jobitem-con",children:[Object(O.jsxs)("div",{className:"top-sec-job-item",children:[Object(O.jsx)("img",{className:"jobitem-logo",src:s,alt:"job details company logo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"jobitem-head",children:r}),Object(O.jsxs)("div",{className:"jobitem-star-con",children:[Object(O.jsx)(g.b,{className:"star-icon"}),Object(O.jsx)("p",{className:"jobitem-rating",children:l})]})]})]}),Object(O.jsxs)("div",{className:"job-item-container-2",children:[Object(O.jsxs)("div",{className:"jobitem-loc-sl-con",children:[Object(O.jsxs)("div",{className:"jobitem-job-loc-con",children:[Object(O.jsx)(_.a,{className:"loc-in-icon"}),Object(O.jsx)("p",{children:n})]}),Object(O.jsxs)("div",{className:"jobitem-job-loc-con",children:[Object(O.jsx)(D.a,{className:"loc-in-icon"}),Object(O.jsx)("p",{children:a})]})]}),Object(O.jsx)("div",{children:i})]}),Object(O.jsx)("hr",{className:"job-line"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"jobitem-desc-head",children:"Description"}),Object(O.jsx)("p",{className:"jobitem-desc-para",children:c})]})]})})}),P=(s(69),[{label:"Full Time",employmentTypeId:"FULLTIME"},{label:"Part Time",employmentTypeId:"PARTTIME"},{label:"Freelance",employmentTypeId:"FREELANCE"},{label:"Internship",employmentTypeId:"INTERNSHIP"}]),F=[{salaryRangeId:"1000000",label:"10 LPA and above"},{salaryRangeId:"2000000",label:"20 LPA and above"},{salaryRangeId:"3000000",label:"30 LPA and above"},{salaryRangeId:"4000000",label:"40 LPA and above"}],V="INITIALJH",U="SUCCESSJH",E="FAILUREJH",B="LOADINGJH",M=function(e){var t=e.eachType,s=e.onCheckBoxReq,a=t.label,c=t.employmentTypeId;return Object(O.jsxs)("div",{className:"checkbox-con",children:[Object(O.jsx)("input",{onChange:function(){s(c)},className:"checkbox-input",type:"checkbox",id:c,value:c}),Object(O.jsx)("label",{htmlFor:c,children:a})]})},q=function(e){var t=e.eachSaltype,s=e.onSalopReq,a=t.label,c=t.salaryRangeId;return Object(O.jsxs)("div",{className:"checkbox-con",children:[Object(O.jsx)("input",{onChange:function(){s(c)},name:"group1",className:"checkbox-input",type:"radio",id:c,value:c}),Object(O.jsx)("label",{htmlFor:c,children:a})]})},W=function(e){function t(){var e;Object(b.a)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=Object(m.a)(this,t,[].concat(a))).state={jobsArray:"",empType:[],empSal:"",search:"",apiStatus:V},e.onClickRetryBtnJobs=function(){e.getJobsData()},e.getJobsData=Object(j.a)(Object(l.a)().mark((function t(){var s,a,c,n,i,o,r,j,b,d;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:B}),s=p.a.get("jwt_token"),a=e.state,c=a.empType,n=a.empSal,i=a.search,console.log(n),o="https://apis.ccbp.in/jobs?employment_type=".concat(c.join(),"&minimum_package=").concat(n,"&search=").concat(i),r={headers:{Authorization:"Bearer ".concat(s)},method:"GET"},t.next=8,fetch(o,r);case 8:return j=t.sent,t.next=11,j.json();case 11:b=t.sent,d=b.jobs.map((function(e){return{companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,jobDescription:e.job_description,location:e.location,packagePerAnnum:e.package_per_annum,title:e.title,rating:e.rating,id:e.id}})),!0===j.ok?e.setState({apiStatus:U,jobsArray:d}):401===j.status&&e.setState({apiStatus:E});case 14:case"end":return t.stop()}}),t)}))),e.renderJobsSuccessView=function(){var t=e.state.jobsArray;return 0===t.length?Object(O.jsxs)("div",{className:"jobs-failue-con",children:[Object(O.jsx)("img",{className:"failue-img-jobs",src:"https://assets.ccbp.in/frontend/react-js/no-jobs-img.png",alt:"no jobs"}),Object(O.jsx)("h1",{className:"job-failure-head",children:"No Jobs Found"}),Object(O.jsx)("p",{className:"job-failure-para",children:"We could not find any jobs. Try other filters"})]}):Object(O.jsx)("ul",{className:"jobs-ul",children:t.map((function(e){return Object(O.jsx)(T,{jobData:e},e.id)}))})},e.getRenderView=function(){switch(e.state.apiStatus){case B:return e.renderJobsLoadingView();case E:return e.renderJobsFailureView();case U:return e.renderJobsSuccessView();default:return null}},e.renderJobsLoadingView=function(){return Object(O.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(O.jsx)(k.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderJobsFailureView=function(){return Object(O.jsxs)("div",{className:"jobs-failue-con",children:[Object(O.jsx)("img",{className:"failue-img-jobs",src:"https://assets.ccbp.in/frontend/react-js/failure-img.png ",alt:"failure view"}),Object(O.jsx)("h1",{className:"job-failure-head",children:"Oups! Something Went Wrong"}),Object(O.jsx)("p",{className:"job-failure-para",children:"We cannot seem to led the page you are looking for"}),Object(O.jsx)("button",{onClick:e.onClickRetryBtnJobs,type:"button",className:"job-failure-btn",children:"Retry"})]})},e.onClickSeacrButton=function(){e.componentDidMount()},e.onSalopReq=function(t){e.setState((function(e){return{empSal:t}}),e.getJobsData)},e.onCheckBoxReq=function(t){var s=e.state.empType;if(s.includes(t)){s.filter((function(e){return e!==t}));e.setState((function(e){}),e.getJobsData)}else s.push(t),e.setState((function(e){}),e.getJobsData)},e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getJobsData()}},{key:"render",value:function(){var e=this,t=this.state.search;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{className:"jobs-bg",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(L,{}),Object(O.jsx)("hr",{className:"jobs-lines"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"tye-head",children:"Type of Employment"}),P.map((function(t){return Object(O.jsx)(M,{eachType:t,onCheckBoxReq:e.onCheckBoxReq},t.employmentTypeId)}))]}),Object(O.jsx)("hr",{className:"jobs-lines"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"tye-head",children:"Salary Range"}),F.map((function(t){return Object(O.jsx)(q,{eachSaltype:t,onSalopReq:e.onSalopReq},t.salaryRangeId)}))]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"input-search-con",children:[Object(O.jsx)("input",{onChange:this.onInputChange,value:t,placeholder:"Search",type:"search",className:"input-saerch"}),Object(O.jsxs)("button",{onClick:this.onClickSeacrButton,className:"saerch-btn",type:"button","data-testid":"searchButton",children:[Object(O.jsx)(N.b,{className:"search-icon"})," Search"]})]}),Object(O.jsx)("div",{className:"main-con",children:this.getRenderView()})]})]})]})}}])}(a.Component),G=W,H=s(34),z=(s(70),function(e){var t=e.eachSkill;return Object(O.jsxs)("li",{className:"skill-li",children:[Object(O.jsx)("img",{className:"skill-img",alt:t.name,src:t.image_url}),Object(O.jsx)("p",{children:t.name})]})}),Y=function(e){var t=e.eachJob;return Object(O.jsx)(o.b,{to:"/jobs/".concat(t.id),className:"jobitem-link-similar",children:Object(O.jsxs)("li",{className:"jobitem-con-skill",children:[Object(O.jsxs)("div",{className:"top-sec-job-item",children:[Object(O.jsx)("img",{className:"jobitem-logo",src:t.company_logo_url,alt:"similar job company logo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"jobitem-head",children:t.title}),Object(O.jsxs)("div",{className:"jobitem-star-con",children:[Object(O.jsx)(g.b,{className:"star-icon"}),Object(O.jsx)("p",{className:"jobitem-rating",children:t.rating})]})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"jobitem-desc-head",children:"Description"}),Object(O.jsx)("p",{className:"jobitem-desc-para",children:t.job_description})]}),Object(O.jsx)("hr",{className:"job-line"}),Object(O.jsx)("div",{className:"job-item-container-2",children:Object(O.jsxs)("div",{className:"jobitem-loc-sl-con",children:[Object(O.jsxs)("div",{className:"jobitem-job-loc-con",children:[Object(O.jsx)(_.a,{className:"loc-in-icon"}),Object(O.jsx)("p",{children:t.location})]}),Object(O.jsxs)("div",{className:"jobitem-job-loc-con",children:[Object(O.jsx)(D.a,{className:"loc-in-icon"}),Object(O.jsx)("p",{children:t.employment_type})]})]})})]})})},K={initialj:"INITIALJob",successj:"SUCCESSJob",failurej:"FAILUREJob",loadingj:"LOADINGJob"},Q=function(e){function t(){var e;Object(b.a)(this,t);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=Object(m.a)(this,t,[].concat(a))).state={apiStatus:K.initial,jobItemData:"",similarJobs:"",lifeAtComapany:""},e.getJobItemData=Object(j.a)(Object(l.a)().mark((function t(){var s,a,c,n,i,o,r,j;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:K.loadingj}),s=e.props.match,a=s.params,c=a.id,console.log(c),n=p.a.get("jwt_token"),i="https://apis.ccbp.in/jobs/".concat(c),o={headers:{Authorization:"Bearer ".concat(n)},method:"GET"},t.next=10,fetch(i,o);case 10:return r=t.sent,t.next=13,r.json();case 13:j=t.sent,console.log(j),!0===r.ok?e.setState({apiStatus:K.successj,jobItemData:j.job_details,similarJobs:j.similar_jobs,lifeAtComapany:j.job_details.life_at_company}):401===r.status&&e.setState({apiStatus:K.failurej});case 16:case"end":return t.stop()}}),t)}))),e.onClickRetryBtnJobsItem=function(){e.getJobItemData()},e.renderJobItemLoadingView=function(){return Object(O.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(O.jsx)(k.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderJobItemFailureView=function(){return Object(O.jsxs)("div",{className:"jobs-failue-con",children:[Object(O.jsx)("img",{className:"failue-img-jobs",src:"https://assets.ccbp.in/frontend/react-js/failure-img.png ",alt:"failure view"}),Object(O.jsx)("h1",{className:"job-failure-head",children:"Oops! Something Went Wrong"}),Object(O.jsx)("p",{className:"job-failure-para",children:"We cannot seem to find the page you are looking for"}),Object(O.jsx)("button",{onClick:e.onClickRetryBtnJobsItem,type:"button",className:"job-failure-btn",children:"Retry"})]})},e.renderJobItemSuccessView=function(){var t=e.state,s=t.jobItemData,a=t.similarJobs,c=t.lifeAtComapany,n=s.skills;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"jobs-item-bg",children:[Object(O.jsxs)("li",{className:"jobitem-con",children:[Object(O.jsxs)("div",{className:"top-sec-job-item",children:[Object(O.jsx)("img",{className:"jobitem-logo",src:s.company_logo_url,alt:"job details company logo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"jobitem-head",children:s.title}),Object(O.jsxs)("div",{className:"jobitem-star-con",children:[Object(O.jsx)(g.b,{className:"star-icon"}),Object(O.jsx)("p",{className:"jobitem-rating",children:s.rating})]})]})]}),Object(O.jsxs)("div",{className:"job-item-container-2",children:[Object(O.jsxs)("div",{className:"jobitem-loc-sl-con",children:[Object(O.jsxs)("div",{className:"jobitem-job-loc-con",children:[Object(O.jsx)(_.a,{className:"loc-in-icon"}),Object(O.jsx)("p",{children:s.location})]}),Object(O.jsxs)("div",{className:"jobitem-job-loc-con",children:[Object(O.jsx)(D.a,{className:"loc-in-icon"}),Object(O.jsx)("p",{children:s.employment_type})]})]}),Object(O.jsx)("div",{children:s.package_per_annum})]}),Object(O.jsx)("hr",{className:"job-line"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"Visit-lik-con",children:[Object(O.jsx)("p",{className:"jobitem-desc-head",children:"Description"}),Object(O.jsxs)("a",{className:"visit-link",href:s.company_website_url,target:"blank",children:["Visit",Object(O.jsx)(H.a,{})]})]}),Object(O.jsx)("p",{className:"jobitem-desc-para",children:s.job_description})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"skilss-head",children:"Skills"}),Object(O.jsx)("ul",{className:"ul-skill-con",children:n.map((function(e){return Object(O.jsx)(z,{eachSkill:e},e.name)}))})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"skilss-head",children:"Life at Company"}),Object(O.jsxs)("div",{className:"life-at-com-con",children:[Object(O.jsx)("p",{children:c.description}),Object(O.jsx)("img",{className:"life-img",src:c.image_url,alt:"life at company"})]})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"skilss-head",children:"Similar Jobs"}),Object(O.jsx)("ul",{className:"ul-skill-con",children:a.map((function(e){return Object(O.jsx)(Y,{eachJob:e},e.id)}))})]})]})})},e.rederJobItemData=function(){switch(e.state.apiStatus){case K.loadingj:return e.renderJobItemLoadingView();case K.failurej:return e.renderJobItemFailureView();case K.successj:return e.renderJobItemSuccessView();default:return null}},e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getJobItemData()}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)(v,{}),Object(O.jsx)("div",{className:"jobs-item-bg",children:this.rederJobItemData()})]})}}])}(a.Component),X=Q,Z=s(35),$=function(e){return void 0===p.a.get("jwt_token")?Object(O.jsx)(r.a,{to:"/login"}):Object(O.jsx)(r.b,Object(Z.a)({},e))},ee=(s(71),function(){return Object(O.jsxs)("div",{className:"not-found-container",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png ",alt:"not found",className:"not-found-img"}),Object(O.jsx)("h1",{children:"Page Not Founds"}),Object(O.jsx)("p",{children:"We are sorry, the page you requested could not be found"})]})}),te=(s(72),function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(r.d,{children:[Object(O.jsx)(r.b,{exact:!0,path:"/JobbyApp-ReactJS/login",component:f}),Object(O.jsx)($,{exact:!0,path:"/JobbyApp-ReactJS/",component:S}),Object(O.jsx)($,{exact:!0,path:"/JobbyApp-ReactJS/jobs",component:G}),Object(O.jsx)($,{path:"/JobbyApp-ReactJS/jobs/:id",component:X}),Object(O.jsx)(r.b,{component:ee})]})})});i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)(te,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.f14cb5c5.chunk.js.map