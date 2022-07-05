window.__NUXT__=(function(a,b,c,d,e,f,g,h,i){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1657063914",layout:"default",error:null,state:{categories:{en:{"Getting Started":[{slug:"index",title:"Introduction",category:a,to:d},{slug:"installation",title:"Installation",category:a,to:"\u002Finstallation"},{slug:"configuration",title:"Configuration",category:a,to:"\u002Fconfiguration"},{slug:"building-the-query",title:"Building the Query",category:a,to:"\u002Fbuilding-the-query"},{slug:"performing-operations",title:"Performing CRUD and Relationship Operations",menuTitle:"Performing Operations",category:a,to:"\u002Fperforming-operations"}],API:[{slug:"model-options",title:"Model Options",category:b,to:"\u002Fapi\u002Fmodel-options"},{slug:"query-builder-methods",title:"Query Builder Methods",category:b,to:"\u002Fapi\u002Fquery-builder-methods"},{slug:"crud-operations",title:"CRUD Operations",category:b,to:"\u002Fapi\u002Fcrud-operations"},{slug:"relationship-operations",title:"Relationship Operations",category:b,to:"\u002Fapi\u002Frelationship-operations"}],Examples:[{slug:"nuxt",title:"Nuxt Usage Example",menuTitle:"Nuxt",category:e,to:"\u002Fexamples\u002Fnuxt"},{slug:"vue",title:"Vue Usage Example",menuTitle:"Vue",category:e,to:"\u002Fexamples\u002Fvue"}],Community:[{slug:"contributing",title:"Contributing",category:f,to:g},{slug:"releases",title:"Releases",category:f,to:"\u002Freleases"}]}},releases:[{name:"v1.10.0",date:"2022-07-05T23:26:44Z",body:"\u003Ch3 id=\"bug-fixes\"\u003EBug Fixes\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Eparser:\u003C\u002Fstrong\u003E fix behaviour when stringifying arrays (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F60986893880c6a2e6c274a14a4b0855ff476b1f8\"\u003E6098689\u003C\u002Fa\u003E), closes \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F214\"\u003E#214\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3 id=\"features\"\u003EFeatures\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Ebuilder:\u003C\u002Fstrong\u003E add \u003Ccode\u003Ewhen\u003C\u002Fcode\u003E method (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F8f08c8fce9498ed41bd05021abf622ded1c3281b\"\u003E8f08c8f\u003C\u002Fa\u003E), closes \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F219\"\u003E#219\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Ebuilder:\u003C\u002Fstrong\u003E add support to pass an object as argument in \u003Ccode\u003Ewhere\u003C\u002Fcode\u003E and \u003Ccode\u003EwhereIn\u003C\u002Fcode\u003E methods (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Fd77b3655c2ac6ac18eca3b6d8cb68c4a884ceb28\"\u003Ed77b365\u003C\u002Fa\u003E), closes \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F205\"\u003E#205\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3 id=\"reverts\"\u003EReverts\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E refactor \u003Ccode\u003E_reqConfig\u003C\u002Fcode\u003E (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Fee33101bb63e09aceddda767b89cad34fa5d7b64\"\u003Eee33101\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v1.9.1",date:"2021-05-25T05:48:15Z",body:"\u003Ch3 id=\"bug-fixes\"\u003EBug Fixes\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E merge request config recursively (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Fdc617da9b39ef2a8c6a094f470370ba4117070f8\"\u003Edc617da\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E prevent request config from ditching private data (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F185\"\u003E#185\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F4b12b184b9c3dd002a9521b88e9049ff959fd66e\"\u003E4b12b18\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E throw an error if operations are used with \u003Ccode\u003Ecustom\u003C\u002Fcode\u003E  (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F173\"\u003E#173\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Feef91b107e4ddeefbf81dc045014ce6a1e5e81e4\"\u003Eeef91b1\u003C\u002Fa\u003E), closes \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F172\"\u003E#172\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v1.9.0",date:"2021-01-17T01:50:53Z",body:"\u003Ch3 id=\"bug-fixes\"\u003EBug Fixes\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003Eadd missing \u003Ccode\u003Econfig\u003C\u002Fcode\u003E static method (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F167\"\u003E#167\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Fb733e45926a12cec6bad9d9a2b77631b8d6cba25\"\u003Eb733e45\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3 id=\"features\"\u003EFeatures\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003Eadd typescript support (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F168\"\u003E#168\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F1d8122fa57b52504efcb8e7d7f021fc6e23e33e8\"\u003E1d8122f\u003C\u002Fa\u003E), closes \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F104\"\u003E#104\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v1.8.2",date:"2020-12-04T15:23:27Z",body:"\u003Ch3 id=\"bug-fixes\"\u003EBug Fixes\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Ebuilder:\u003C\u002Fstrong\u003E multiple nested filters were not working (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F154\"\u003E#154\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F72de59832c9991e99e35771cd2dfba5662673280\"\u003E72de598\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Ebuilder:\u003C\u002Fstrong\u003E use \u003Ccode\u003Etypeof\u003C\u002Fcode\u003E instead of \u003Ccode\u003Econstructor\u003C\u002Fcode\u003E for checks (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F644ab4e8a1a6ab9b1e450c8a1e770a324b93cd8c\"\u003E644ab4e\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v1.8.1",date:"2020-11-10T19:39:22Z",body:"\u003Ch3 id=\"bug-fixes\"\u003EBug Fixes\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Edeps:\u003C\u002Fstrong\u003E add missing dependency \u003Ccode\u003Eqs\u003C\u002Fcode\u003E (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F80a76364071403c7bff92657551829eeb23faf90\"\u003E80a7636\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v1.8.0",date:"2020-11-10T15:20:11Z",body:"\u003Ch3 id=\"features\"\u003EFeatures\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Ebuilder:\u003C\u002Fstrong\u003E accept array for \u003Ccode\u003Einclude\u003C\u002Fcode\u003E, \u003Ccode\u003Eappend\u003C\u002Fcode\u003E and \u003Ccode\u003EorderBy\u003C\u002Fcode\u003E (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F148\"\u003E#148\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002F0d7ac004e407026c3d2e743989e16331579ff9be\"\u003E0d7ac00\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Ebuilder:\u003C\u002Fstrong\u003E add support to nested filters (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F141\"\u003E#141\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Ffaf3d1ead825d95a60276f29affed13cfffb06e8\"\u003Efaf3d1e\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E add methods \u003Ccode\u003Ewith\u003C\u002Fcode\u003E, \u003Ccode\u003Eall\u003C\u002Fcode\u003E and \u003Ccode\u003E$all\u003C\u002Fcode\u003E (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F147\"\u003E#147\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Fdb3951155c8b3965194457410ed7e5d9979dc182\"\u003Edb39511\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E add support to configuration at query builder (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F142\"\u003E#142\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Fe46d63ef343d06de277e339e38ca561d4519828a\"\u003Ee46d63e\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E add support to upload files (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F143\"\u003E#143\u003C\u002Fa\u003E) (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Fa93cf5e54e6d53523c823cc304d29d290870b31b\"\u003Ea93cf5e\u003C\u002Fa\u003E), closes \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fissues\u002F83\"\u003E#83\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v1.7.1",date:"2020-11-01T15:24:16Z",body:"\u003Ch3 id=\"bug-fixes\"\u003EBug Fixes\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E fix typo in \u003Ccode\u003Efor\u003C\u002Fcode\u003E error message (\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fcommit\u002Ffbd2bca435ab458d0fbf8fd15ecfa62773ef4778\"\u003Efbd2bca\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"v1.7.0",date:"2020-10-31T22:03:36Z",body:"\u003Ch3 id=\"features\"\u003EFeatures\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E handle &#39;data&#39; wrapped responses for create and update (#109) (1bc6248) (@fadugyamfi)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E add support to nested keys for relations (#127) (095c1c3) (@JoaoPedroAS51)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3 id=\"bug-fixes\"\u003EBug Fixes\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E add null check in \u003Ccode\u003EisValidId\u003C\u002Fcode\u003E (#115) (279f9dc) (@guirociozanini)\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003Emodel:\u003C\u002Fstrong\u003E relations are not being applied if any is null (#134) (92932cc) (@JoaoPedroAS51)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3 id=\"docs\"\u003EDocs\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003Eadd new documentation website :tada: (#130) (e1afa2a) (@JoaoPedroAS51)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ESee \u003Ca target=\"_blank\" href=\"https:\u002F\u002Frobsontenorio.github.io\u002Fvue-api-query\u002F\"\u003Ehttps:\u002F\u002Frobsontenorio.github.io\u002Fvue-api-query\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"},{name:"1.6.1",date:"2020-10-09T14:59:54Z",body:"\u003Cp\u003EBump\u003C\u002Fp\u003E\n"},{name:"Apply instances of relationships to nested objects. ",date:"2020-10-09T13:23:31Z",body:"\u003Cp\u003EThanks @JoaoPedroAS51 !\u003C\u002Fp\u003E\n\u003Cp\u003EYou can also apply a model instance to a nested object by setting the key and the model in \u003Ccode\u003Erelations\u003C\u002Fcode\u003E method.\u003C\u002Fp\u003E\n\u003Cp\u003EIf the backend responds with:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u002F\u002F response from API for \u002Fposts\u002F1\n{\n  title: &#39;My title&#39;\n  body: &#39;Some text here&#39;,\n  user: {\n    firstName: &#39;John&#39;,\n    lastName: &#39;Doe&#39;\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EWe just need to set \u003Ccode\u003Euser\u003C\u002Fcode\u003E to User model:\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003E\u002Fmodels\u002FPost.js\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003Eclass Post extends Model {\n  relations () {\n    return {\n      \u002F\u002F Apply User model to `user` object\n      user: User\n    }\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EIt also works for collections. So if the backend responds with:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u002F\u002F response from API for \u002Fcomments\n{\n  text: &#39;Some text here&#39;,\n  user: {\n    firstName: &#39;John&#39;,\n    lastName: &#39;Doe&#39;\n  },\n  replies: [\n    {\n      text: &#39;A reply here&#39;,\n      user: {\n        firstName: &#39;Joe&#39;,\n        lastName: &#39;Doe&#39;\n      }\n    },\n    {\n      text: &#39;Another reply here&#39;,\n      user: {\n        firstName: &#39;Mary&#39;,\n        lastName: &#39;Doe&#39;\n      },\n      replies: [\n        {\n          text: &#39;Yes, this is the reply of the reply!&#39;,\n          user: {\n            firstName: &#39;Max&#39;,\n            lastName: &#39;Doe&#39;\n          }\n        }\n      ]\n    }\n  ]\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EThen we just need to set \u003Ccode\u003Euser\u003C\u002Fcode\u003E to User model and \u003Ccode\u003Ereplies\u003C\u002Fcode\u003E to Comment model:\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong\u003E\u002Fmodels\u002FComment.js\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003Eclass Comment extends Model {\n  relations () {\n    return {\n      \u002F\u002F Apply User model to `user` object\n      user: User,\n      \u002F\u002F Apply Comment model to each object of `replies` array\n      replies: Comment\n    }\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"Fixes",date:"2020-05-15T17:30:52Z",body:"\u003Cul\u003E\n\u003Cli\u003EUpdate all dependencies\u003C\u002Fli\u003E\n\u003Cli\u003ESmall fix on README @manniL \u003C\u002Fli\u003E\n\u003Cli\u003EReset query string @MichMich\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Esave()\u003C\u002Fcode\u003E method makes a \u003Ccode\u003EPUT\u003C\u002Fcode\u003E request to the correct URL on nested object thas was fetched with \u003Ccode\u003Efind()\u003C\u002Fcode\u003E method @taai\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EThanks to @Peter-Krebs for reviewing.\u003C\u002Fp\u003E\n"},{name:"Fix for $find to use a constructor on the result ",date:"2019-05-02T18:02:22Z",body:"\u003Cp\u003EThanks @rossity for #67\u003C\u002Fp\u003E\n"},{name:"Add 'fetch' based methods: $first() and $find()",date:"2019-04-18T01:05:46Z",body:"\u003Cp\u003EThanks @leeovery  for #61.\u003C\u002Fp\u003E\n\u003Cp\u003EIntroduces new fetch style request for \u003Ccode\u003Efind()\u003C\u002Fcode\u003E and \u003Ccode\u003Efirst()\u003C\u002Fcode\u003E methods. See README for more info.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003Elet user = await User.$find(1)\n\nlet user = await User.$first()\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"Fix custom resources baseURL()",date:"2019-02-27T00:05:50Z",body:"\u003Cp\u003EThanks @peterquentin \u003C\u002Fp\u003E\n"},{name:"The `custom()` method takes multiples parameters ",date:"2019-02-24T03:22:19Z",body:"\u003Cp\u003EThanks @Peter-Krebs \u003C\u002Fp\u003E\n\u003Cp\u003EThe \u003Ccode\u003Ecustom()\u003C\u002Fcode\u003E method can be called with multiple arguments to build\nresource endpoints and hierarchies. Simply supply them in the correct order.\nAny combination of strings and models is possible.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E    let user = new User({ id: 1 })\n    let post = new Post()\n\n    \u002F\u002F GET \u002Fusers\u002F1\u002Fposts\u002Flatest\n    const result = await Post.custom(user, post, &#39;latest&#39;).get()\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"Improvements and fixes",date:"2019-02-18T19:29:50Z",body:"\u003Ch2 id=\"update-dependencies\"\u003EUpdate dependencies\u003C\u002Fh2\u003E\n\u003Cp\u003EUpdated to latest babel and eslint features.\u003C\u002Fp\u003E\n\u003Ch2 id=\"added-ability-to-customize-query-parameter-names\"\u003EAdded ability to customize query parameter names\u003C\u002Fh2\u003E\n\u003Cp\u003EIf you need to change default values just override parametersName() on your Base Model. So, the generated query string will use this new values.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003Eimport { Model as BaseModel } from &#39;vue-api-query&#39;\n\nexport default class Model extends BaseModel {\n\n  parameterNames () {\n    return {\n      include: &#39;include_custom&#39;,\n      filter: &#39;filter_custom&#39;,\n      sort: &#39;sort_custom&#39;,\n      fields: &#39;fields_custom&#39;,\n      append: &#39;append_custom&#39;,\n      page: &#39;page_custom&#39;,\n      limit: &#39;limit_custom&#39;\n    }\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EThanks @suth \n\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fpull\u002F42\"\u003Ehttps:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fpull\u002F42\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"fix-array-strategy-validation-for-ssr\"\u003EFix array strategy validation for SSR\u003C\u002Fh2\u003E\n\u003Cp\u003EGot error on using vue-api-query with NUXT on universal mode (SSR)\u003C\u002Fp\u003E\n\u003Cp\u003EThanks @MisterEffix \n\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fpull\u002F43\"\u003Ehttps:\u002F\u002Fgithub.com\u002Frobsontenorio\u002Fvue-api-query\u002Fpull\u002F43\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"},{name:"The `for()` method can take multiple objects to build hierarchy levels.",date:"2018-11-22T01:35:13Z",body:"\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E let user = new User({id: 1})\n let post = await user.posts().first()\n\n \u002F\u002F Related objects go in order of their appearance in the URL.\n let comment = new Comment({text: &#39;for() takes multiple objects.&#39;}).for(user, post)\n  \u002F\u002F POST \u002Fusers\u002F1\u002Fposts\u002F1\u002Fcomments\n await comment.save()\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:".for() should use object.getPrimaryKey()",date:"2018-10-31T10:30:52Z",body:void 0},{name:"find() method for nested resources",date:"2018-07-26T02:56:35Z",body:"\u003Cp\u003EIf you need to get a nested resource, without getting the parent model at first, you can do something like this.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u002F\u002F GET \u002Fusers\u002F1\u002Fposts\n\nlet User = new User({id: 1})\nlet Post = await User.posts().get()\n\n\u002F\u002F GET \u002Fusers\u002F1\u002Fposts\u002F2\nlet User = new User({id: 1})\nlet Post = await User.posts().find(2)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"Stable release and for() method",date:"2018-07-16T16:10:32Z",body:"\u003Cul\u003E\n\u003Cli\u003ETag 1.0.0 stable\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Efor()\u003C\u002Fcode\u003E method for creating new related objects\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ECreating new related objects is easy. Just use the for() method, passing the related object.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E  let post = new Post({title: &#39;Woo!&#39;})  \n\n  \u002F\u002F POST \u002Fposts\n  await post.save()\n\n  let comment = new Comment({text: &#39;New one for this post&#39;}).for(post)\n\n  \u002F\u002F POST \u002Fposts\u002F1\u002Fcomments\n  await comment.save()\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"Custom params",date:"2018-06-05T01:15:32Z",body:"\u003Cp\u003EIf you need to pass any extra param not provided by \u003Ccode\u003Evue-api-query\u003C\u002Fcode\u003E pattern, just use the \u003Ccode\u003Eparams()\u003C\u002Fcode\u003E method while querying:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u002F\u002F GET \u002Fusers?doSomething=yes&amp;process=no\n\nlet users = await User\n  .params({\n    doSomething: &#39;yes&#39;,\n    process: &#39;no&#39;\n  })\n  .get()\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EOf course you can chain it with other methods, including on relationships.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"language-js\"\u003E\u002F\u002F GET \u002Fposts\u002F1\u002Fcomments?include=user&amp;blah=123\n\nlet comments = await post\n  .comments()\n  .include(&#39;user&#39;)\n  .params({blah: 123})\n  .get()\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n"},{name:"Add `primaryKey()` method.",date:"2018-05-16T18:21:08Z",body:"\u003Cp\u003EIn case your model does not work with default primary key (&#39;id&#39;).\u003C\u002Fp\u003E\n"},{name:"0.5.0",date:"2018-04-11T03:49:06Z",body:"\u003Cp\u003ESupport PUT, POST, DELETE for nested relationships\u003C\u002Fp\u003E\n"},{name:"0.4.1",date:"2018-04-06T22:54:48Z",body:"\u003Cp\u003EFix internal variable name\u003C\u002Fp\u003E\n"},{name:"0.4.0",date:"2018-04-05T12:43:35Z",body:"\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003EAdd \u003Ccode\u003Eselect()\u003C\u002Fcode\u003E for sparse fields\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003ERemove \u003Ccode\u003Efind()\u003C\u002Fcode\u003E restriction for integers\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"0.3.0",date:"2018-03-31T01:44:25Z",body:"\u003Cul\u003E\n\u003Cli\u003Eadd \u003Ccode\u003Edelete()\u003C\u002Fcode\u003E method\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"0.2.0",date:"2018-03-30T04:32:31Z",body:"\u003Cul\u003E\n\u003Cli\u003Eadd &quot;fetch style request&quot; with $get()\u003C\u002Fli\u003E\n\u003Cli\u003Eadd pagination with page() and limit()\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"}],settings:{title:"Vue API Query",defaultDir:"docs",defaultBranch:"dev",filled:c,slug:"settings",url:"https:\u002F\u002Frobsontenorio.github.io\u002Fvue-api-query",github:"robsontenorio\u002Fvue-api-query",dir:d,path:"\u002Fsettings",extension:".json",createdAt:h,updatedAt:h,to:"\u002F\u002Fsettings"},menu:{open:false},i18n:{routeParams:{}}},serverRendered:c,routePath:g,config:{content:{dbHash:"b940ce0f"}},__i18n:{langs:{en:{search:{placeholder:"Search the docs (Press \"\u002F\" to focus)"},toc:{title:"On this page"},article:{github:"Edit this page on GitHub"}}}},colorMode:{preference:i,value:i,unknown:c}}}("Getting Started","API",true,"\u002F","Examples","Community","\u002Fcommunity\u002Fcontributing","2022-07-05T23:31:04.065Z","system"));