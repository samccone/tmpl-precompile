function escape(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function attrs(a){var b=[],c=a.terse;delete a.terse;var d=Object.keys(a),e=d.length;if(e){b.push("");for(var f=0;f<e;++f){var g=d[f],h=a[g];"boolean"==typeof h||null==h?h&&(c?b.push(g):b.push(g+'="'+g+'"')):"class"==g&&Array.isArray(h)?b.push(g+'="'+escape(h.join(" "))+'"'):b.push(g+'="'+escape(h)+'"')}}return b.join(" ")}var jadeHelpers={attrs:attrs,escape:escape};NS=NS||{},NS.uglified=NS.uglified||{},NS.uglified.level1=NS.uglified.level1||{},NS.uglified.level1.level2=NS.uglified.level1.level2||{},NS.uglified.level1=NS.uglified.level1||{},NS.uglified.level1.level2=NS.uglified.level1.level2||{},NS.uglified.level1.level2.level3=NS.uglified.level1.level2.level3||{},NS.uglified.layout=function(locals){function escape(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function attrs(a){var b=[],c=a.terse;delete a.terse;var d=Object.keys(a),e=d.length;if(e){b.push("");for(var f=0;f<e;++f){var g=d[f],h=a[g];"boolean"==typeof h||null==h?h&&(c?b.push(g):b.push(g+'="'+g+'"')):"class"==g&&Array.isArray(h)?b.push(g+'="'+escape(h.join(" "))+'"'):b.push(g+'="'+escape(h)+'"')}}return b.join(" ")}var buf=[];with(locals||{}){var interp;buf.push("<!DOCTYPE html>"),buf.push("<html>"),buf.push("<head>"),buf.push("<title>"),buf.push("</title>"),buf.push("</head>"),buf.push("<body>"),buf.push("<h1>"),buf.push("Content goes here"),buf.push("</h1>"),buf.push("<div"),buf.push(attrs({terse:!0,id:"container"})),buf.push(">");var __val__=body;buf.push(null==__val__?"":__val__),buf.push("</div>"),buf.push("</body>"),buf.push("</html>")}return buf.join("")},NS.uglified.root=function(locals){function escape(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function attrs(a){var b=[],c=a.terse;delete a.terse;var d=Object.keys(a),e=d.length;if(e){b.push("");for(var f=0;f<e;++f){var g=d[f],h=a[g];"boolean"==typeof h||null==h?h&&(c?b.push(g):b.push(g+'="'+g+'"')):"class"==g&&Array.isArray(h)?b.push(g+'="'+escape(h.join(" "))+'"'):b.push(g+'="'+escape(h)+'"')}}return b.join(" ")}var buf=[];with(locals||{}){var interp;buf.push("<h2>"),buf.push("Hello"),buf.push("</h2>"),buf.push("<p>"),buf.push("World!"),buf.push("</p>")}return buf.join("")},NS.uglified.level1.root=function(locals){function escape(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function attrs(a){var b=[],c=a.terse;delete a.terse;var d=Object.keys(a),e=d.length;if(e){b.push("");for(var f=0;f<e;++f){var g=d[f],h=a[g];"boolean"==typeof h||null==h?h&&(c?b.push(g):b.push(g+'="'+g+'"')):"class"==g&&Array.isArray(h)?b.push(g+'="'+escape(h.join(" "))+'"'):b.push(g+'="'+escape(h)+'"')}}return b.join(" ")}var buf=[];with(locals||{}){var interp;buf.push("<h2>"),buf.push("Hello"),buf.push("</h2>"),buf.push("<p>"),buf.push("World!"),buf.push("</p>")}return buf.join("")},NS.uglified.level1.level2.root=function(locals){function escape(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function attrs(a){var b=[],c=a.terse;delete a.terse;var d=Object.keys(a),e=d.length;if(e){b.push("");for(var f=0;f<e;++f){var g=d[f],h=a[g];"boolean"==typeof h||null==h?h&&(c?b.push(g):b.push(g+'="'+g+'"')):"class"==g&&Array.isArray(h)?b.push(g+'="'+escape(h.join(" "))+'"'):b.push(g+'="'+escape(h)+'"')}}return b.join(" ")}var buf=[];with(locals||{}){var interp;buf.push("<h2>"),buf.push("Hello"),buf.push("</h2>"),buf.push("<p>"),buf.push("World!"),buf.push("</p>")}return buf.join("")},NS.uglified.level1.level2.level3.root=function(locals){function escape(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function attrs(a){var b=[],c=a.terse;delete a.terse;var d=Object.keys(a),e=d.length;if(e){b.push("");for(var f=0;f<e;++f){var g=d[f],h=a[g];"boolean"==typeof h||null==h?h&&(c?b.push(g):b.push(g+'="'+g+'"')):"class"==g&&Array.isArray(h)?b.push(g+'="'+escape(h.join(" "))+'"'):b.push(g+'="'+escape(h)+'"')}}return b.join(" ")}var buf=[];with(locals||{}){var interp;buf.push("<h2>"),buf.push("Hello"),buf.push("</h2>"),buf.push("<p>"),buf.push("World!"),buf.push("</p>")}return buf.join("")}