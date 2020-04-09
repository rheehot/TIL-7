(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{281:function(t,e,v){"use strict";v.r(e);var _=v(29),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"restful-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" RESTful API")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("WWW과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍쳐의 한 형식으로\n자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반에 대한 패턴")])]),t._v(" "),v("li",[v("p",[t._v("REST (Representational State Transfer)")])]),t._v(" "),v("li",[v("p",[t._v("REST의 기본원칙을 성실히 지킨 서비스 디자인")])]),t._v(" "),v("li",[v("p",[t._v("REST는 디자인 패턴이다.")]),t._v(" "),v("ul",[v("li",[t._v("Resource Oriented Architecture")]),t._v(" "),v("li",[t._v("API 설계 중심에 자원(Resource)이 있고 HTTP Method 를 통해 자원을 처리하도록 설계됨.")])])])]),t._v(" "),v("h2",{attrs:{id:"rest-6-원칙"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rest-6-원칙"}},[t._v("#")]),t._v(" REST 6 원칙")]),t._v(" "),v("ul",[v("li",[t._v("Uniform Interface")]),t._v(" "),v("li",[t._v("Stateless")]),t._v(" "),v("li",[t._v("Caching")]),t._v(" "),v("li",[t._v("Client-Server")]),t._v(" "),v("li",[t._v("Hierarchical system")]),t._v(" "),v("li",[t._v("Code on demand")])]),t._v(" "),v("p",[t._v("..")]),t._v(" "),v("h2",{attrs:{id:"restful-하게-api-를-디자인-한다는-것의-의미"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-하게-api-를-디자인-한다는-것의-의미"}},[t._v("#")]),t._v(" Restful 하게 API 를 디자인 한다는 것의 의미")]),t._v(" "),v("ol",[v("li",[t._v("리소스와 행위를 명시적이고 직관적으로 분리한다.\n"),v("ul",[v("li",[t._v("리소스는 URI 로 표현되는데 리소스가 가리키는 것은 명사로 표현되어야 한다.")]),t._v(" "),v("li",[t._v("행위는 HTTP Method 로 표현하고, GET(조회), POST(생성), PUT(기존 entity 전체 수정), PATCH(기존 entity 일부 수정),\nDELETE(삭제) 를 분명한 목적으로 사용한다.")])])]),t._v(" "),v("li",[t._v("Message는 Header와 Body 를 명확하게 분리해서 사용한다.\n"),v("ul",[v("li",[t._v("Entity 에 대한 내용은 body 에 담는다.")]),t._v(" "),v("li",[t._v("애플리케이션 서버가 행동할 판단의 근거가 되는 컨트롤 정보인 API 버전 정보, 응답받고자 하는 MIME 타입 등은 header에 담는다.")]),t._v(" "),v("li",[t._v("Header 와 body 는 http header 와 http body 로 나눌 수도 있고, http body 에 들어가는 json 구조로 분리할 수도 있따.")])])]),t._v(" "),v("li",[t._v("API버전을 관리한다.\n"),v("ul",[v("li",[t._v("환경은 항상 변하기 때문에 API의 signature  가 변경될 수도 있음에 유의하자.")]),t._v(" "),v("li",[t._v("특정 API 를 변경할 때는 반드시 하위호환성을 보장해야 한다.")])])]),t._v(" "),v("li",[t._v("서버와 클라이언트가 같은 방식을 사용해서 요청하도록 한다.\n"),v("ul",[v("li",[t._v("브라우저는 form-data 형식의 submit으로 보내고 서버에서는 json 형태로 보내는 식의 분리보다는 json으로 보내든, 둘 다 form-data 형식으로 보내든 하나로 통일한다.")]),t._v(" "),v("li",[t._v("다른 말로 표현하자면 URI가 플랫폼 중립적이어야한다.\n.....")])])])]),t._v(" "),v("h2",{attrs:{id:"장점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),v("ol",[v("li",[t._v("Open API를 제공하기 쉽다.")]),t._v(" "),v("li",[t._v("멀티플랫폼 지원 및 연동이 용이하다.")]),t._v(" "),v("li",[t._v("원하는 타입으로 데이터를 주고 받을 수 있다.")]),t._v(" "),v("li",[t._v("기존 웹 인프라(HTTP)를 그대로 사용할 수 있따.")])]),t._v(" "),v("h2",{attrs:{id:"단점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),v("p",[t._v("사용할 수 있는 메소드가 4 가지 밖에 없다.\n분산환경에는 부적합하다.\nHTTP 통신 모델에 대해서만 지원한다.\n...")])])}),[],!1,null,null,null);e.default=a.exports}}]);