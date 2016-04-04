# businessIntelligence
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" />
<title>rapport</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>

<style type="text/css">
    /*!
*
* Twitter Bootstrap
*
*//*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:10px;-webkit-tap-highlight-color:transparent}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0;vertical-align:middle}svg:not(:root){overflow:hidden}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre,textarea{overflow:auto}code,kbd,pre,samp{font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{background:0 0!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href)")"}abbr[title]:after{content:" (" attr(title)")"}a[href^="javascript:"]:after,a[href^="#"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}select{background:#fff!important}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url(../components/bootstrap/fonts/glyphicons-halflings-regular.eot);src:url(../components/bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix)format('embedded-opentype'),url(../components/bootstrap/fonts/glyphicons-halflings-regular.woff2)format('woff2'),url(../components/bootstrap/fonts/glyphicons-halflings-regular.woff)format('woff'),url(../components/bootstrap/fonts/glyphicons-halflings-regular.ttf)format('truetype'),url(../components/bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular)format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:"\2a"}.glyphicon-plus:before{content:"\2b"}.glyphicon-eur:before,.glyphicon-euro:before{content:"\20ac"}.glyphicon-minus:before{content:"\2212"}.glyphicon-cloud:before{content:"\2601"}.glyphicon-envelope:before{content:"\2709"}.glyphicon-pencil:before{content:"\270f"}.glyphicon-glass:before{content:"\e001"}.glyphicon-music:before{content:"\e002"}.glyphicon-search:before{content:"\e003"}.glyphicon-heart:before{content:"\e005"}.glyphicon-star:before{content:"\e006"}.glyphicon-star-empty:before{content:"\e007"}.glyphicon-user:before{content:"\e008"}.glyphicon-film:before{content:"\e009"}.glyphicon-th-large:before{content:"\e010"}.glyphicon-th:before{content:"\e011"}.glyphicon-th-list:before{content:"\e012"}.glyphicon-ok:before{content:"\e013"}.glyphicon-remove:before{content:"\e014"}.glyphicon-zoom-in:before{content:"\e015"}.glyphicon-zoom-out:before{content:"\e016"}.glyphicon-off:before{content:"\e017"}.glyphicon-signal:before{content:"\e018"}.glyphicon-cog:before{content:"\e019"}.glyphicon-trash:before{content:"\e020"}.glyphicon-home:before{content:"\e021"}.glyphicon-file:before{content:"\e022"}.glyphicon-time:before{content:"\e023"}.glyphicon-road:before{content:"\e024"}.glyphicon-download-alt:before{content:"\e025"}.glyphicon-download:before{content:"\e026"}.glyphicon-upload:before{content:"\e027"}.glyphicon-inbox:before{content:"\e028"}.glyphicon-play-circle:before{content:"\e029"}.glyphicon-repeat:before{content:"\e030"}.glyphicon-refresh:before{content:"\e031"}.glyphicon-list-alt:before{content:"\e032"}.glyphicon-lock:before{content:"\e033"}.glyphicon-flag:before{content:"\e034"}.glyphicon-headphones:before{content:"\e035"}.glyphicon-volume-off:before{content:"\e036"}.glyphicon-volume-down:before{content:"\e037"}.glyphicon-volume-up:before{content:"\e038"}.glyphicon-qrcode:before{content:"\e039"}.glyphicon-barcode:before{content:"\e040"}.glyphicon-tag:before{content:"\e041"}.glyphicon-tags:before{content:"\e042"}.glyphicon-book:before{content:"\e043"}.glyphicon-bookmark:before{content:"\e044"}.glyphicon-print:before{content:"\e045"}.glyphicon-camera:before{content:"\e046"}.glyphicon-font:before{content:"\e047"}.glyphicon-bold:before{content:"\e048"}.glyphicon-italic:before{content:"\e049"}.glyphicon-text-height:before{content:"\e050"}.glyphicon-text-width:before{content:"\e051"}.glyphicon-align-left:before{content:"\e052"}.glyphicon-align-center:before{content:"\e053"}.glyphicon-align-right:before{content:"\e054"}.glyphicon-align-justify:before{content:"\e055"}.glyphicon-list:before{content:"\e056"}.glyphicon-indent-left:before{content:"\e057"}.glyphicon-indent-right:before{content:"\e058"}.glyphicon-facetime-video:before{content:"\e059"}.glyphicon-picture:before{content:"\e060"}.glyphicon-map-marker:before{content:"\e062"}.glyphicon-adjust:before{content:"\e063"}.glyphicon-tint:before{content:"\e064"}.glyphicon-edit:before{content:"\e065"}.glyphicon-share:before{content:"\e066"}.glyphicon-check:before{content:"\e067"}.glyphicon-move:before{content:"\e068"}.glyphicon-step-backward:before{content:"\e069"}.glyphicon-fast-backward:before{content:"\e070"}.glyphicon-backward:before{content:"\e071"}.glyphicon-play:before{content:"\e072"}.glyphicon-pause:before{content:"\e073"}.glyphicon-stop:before{content:"\e074"}.glyphicon-forward:before{content:"\e075"}.glyphicon-fast-forward:before{content:"\e076"}.glyphicon-step-forward:before{content:"\e077"}.glyphicon-eject:before{content:"\e078"}.glyphicon-chevron-left:before{content:"\e079"}.glyphicon-chevron-right:before{content:"\e080"}.glyphicon-plus-sign:before{content:"\e081"}.glyphicon-minus-sign:before{content:"\e082"}.glyphicon-remove-sign:before{content:"\e083"}.glyphicon-ok-sign:before{content:"\e084"}.glyphicon-question-sign:before{content:"\e085"}.glyphicon-info-sign:before{content:"\e086"}.glyphicon-screenshot:before{content:"\e087"}.glyphicon-remove-circle:before{content:"\e088"}.glyphicon-ok-circle:before{content:"\e089"}.glyphicon-ban-circle:before{content:"\e090"}.glyphicon-arrow-left:before{content:"\e091"}.glyphicon-arrow-right:before{content:"\e092"}.glyphicon-arrow-up:before{content:"\e093"}.glyphicon-arrow-down:before{content:"\e094"}.glyphicon-share-alt:before{content:"\e095"}.glyphicon-resize-full:before{content:"\e096"}.glyphicon-resize-small:before{content:"\e097"}.glyphicon-exclamation-sign:before{content:"\e101"}.glyphicon-gift:before{content:"\e102"}.glyphicon-leaf:before{content:"\e103"}.glyphicon-fire:before{content:"\e104"}.glyphicon-eye-open:before{content:"\e105"}.glyphicon-eye-close:before{content:"\e106"}.glyphicon-warning-sign:before{content:"\e107"}.glyphicon-plane:before{content:"\e108"}.glyphicon-calendar:before{content:"\e109"}.glyphicon-random:before{content:"\e110"}.glyphicon-comment:before{content:"\e111"}.glyphicon-magnet:before{content:"\e112"}.glyphicon-chevron-up:before{content:"\e113"}.glyphicon-chevron-down:before{content:"\e114"}.glyphicon-retweet:before{content:"\e115"}.glyphicon-shopping-cart:before{content:"\e116"}.glyphicon-folder-close:before{content:"\e117"}.glyphicon-folder-open:before{content:"\e118"}.glyphicon-resize-vertical:before{content:"\e119"}.glyphicon-resize-horizontal:before{content:"\e120"}.glyphicon-hdd:before{content:"\e121"}.glyphicon-bullhorn:before{content:"\e122"}.glyphicon-bell:before{content:"\e123"}.glyphicon-certificate:before{content:"\e124"}.glyphicon-thumbs-up:before{content:"\e125"}.glyphicon-thumbs-down:before{content:"\e126"}.glyphicon-hand-right:before{content:"\e127"}.glyphicon-hand-left:before{content:"\e128"}.glyphicon-hand-up:before{content:"\e129"}.glyphicon-hand-down:before{content:"\e130"}.glyphicon-circle-arrow-right:before{content:"\e131"}.glyphicon-circle-arrow-left:before{content:"\e132"}.glyphicon-circle-arrow-up:before{content:"\e133"}.glyphicon-circle-arrow-down:before{content:"\e134"}.glyphicon-globe:before{content:"\e135"}.glyphicon-wrench:before{content:"\e136"}.glyphicon-tasks:before{content:"\e137"}.glyphicon-filter:before{content:"\e138"}.glyphicon-briefcase:before{content:"\e139"}.glyphicon-fullscreen:before{content:"\e140"}.glyphicon-dashboard:before{content:"\e141"}.glyphicon-paperclip:before{content:"\e142"}.glyphicon-heart-empty:before{content:"\e143"}.glyphicon-link:before{content:"\e144"}.glyphicon-phone:before{content:"\e145"}.glyphicon-pushpin:before{content:"\e146"}.glyphicon-usd:before{content:"\e148"}.glyphicon-gbp:before{content:"\e149"}.glyphicon-sort:before{content:"\e150"}.glyphicon-sort-by-alphabet:before{content:"\e151"}.glyphicon-sort-by-alphabet-alt:before{content:"\e152"}.glyphicon-sort-by-order:before{content:"\e153"}.glyphicon-sort-by-order-alt:before{content:"\e154"}.glyphicon-sort-by-attributes:before{content:"\e155"}.glyphicon-sort-by-attributes-alt:before{content:"\e156"}.glyphicon-unchecked:before{content:"\e157"}.glyphicon-expand:before{content:"\e158"}.glyphicon-collapse-down:before{content:"\e159"}.glyphicon-collapse-up:before{content:"\e160"}.glyphicon-log-in:before{content:"\e161"}.glyphicon-flash:before{content:"\e162"}.glyphicon-log-out:before{content:"\e163"}.glyphicon-new-window:before{content:"\e164"}.glyphicon-record:before{content:"\e165"}.glyphicon-save:before{content:"\e166"}.glyphicon-open:before{content:"\e167"}.glyphicon-saved:before{content:"\e168"}.glyphicon-import:before{content:"\e169"}.glyphicon-export:before{content:"\e170"}.glyphicon-send:before{content:"\e171"}.glyphicon-floppy-disk:before{content:"\e172"}.glyphicon-floppy-saved:before{content:"\e173"}.glyphicon-floppy-remove:before{content:"\e174"}.glyphicon-floppy-save:before{content:"\e175"}.glyphicon-floppy-open:before{content:"\e176"}.glyphicon-credit-card:before{content:"\e177"}.glyphicon-transfer:before{content:"\e178"}.glyphicon-cutlery:before{content:"\e179"}.glyphicon-header:before{content:"\e180"}.glyphicon-compressed:before{content:"\e181"}.glyphicon-earphone:before{content:"\e182"}.glyphicon-phone-alt:before{content:"\e183"}.glyphicon-tower:before{content:"\e184"}.glyphicon-stats:before{content:"\e185"}.glyphicon-sd-video:before{content:"\e186"}.glyphicon-hd-video:before{content:"\e187"}.glyphicon-subtitles:before{content:"\e188"}.glyphicon-sound-stereo:before{content:"\e189"}.glyphicon-sound-dolby:before{content:"\e190"}.glyphicon-sound-5-1:before{content:"\e191"}.glyphicon-sound-6-1:before{content:"\e192"}.glyphicon-sound-7-1:before{content:"\e193"}.glyphicon-copyright-mark:before{content:"\e194"}.glyphicon-registration-mark:before{content:"\e195"}.glyphicon-cloud-download:before{content:"\e197"}.glyphicon-cloud-upload:before{content:"\e198"}.glyphicon-tree-conifer:before{content:"\e199"}.glyphicon-tree-deciduous:before{content:"\e200"}.glyphicon-cd:before{content:"\e201"}.glyphicon-save-file:before{content:"\e202"}.glyphicon-open-file:before{content:"\e203"}.glyphicon-level-up:before{content:"\e204"}.glyphicon-copy:before{content:"\e205"}.glyphicon-paste:before{content:"\e206"}.glyphicon-alert:before{content:"\e209"}.glyphicon-equalizer:before{content:"\e210"}.glyphicon-king:before{content:"\e211"}.glyphicon-queen:before{content:"\e212"}.glyphicon-pawn:before{content:"\e213"}.glyphicon-bishop:before{content:"\e214"}.glyphicon-knight:before{content:"\e215"}.glyphicon-baby-formula:before{content:"\e216"}.glyphicon-tent:before{content:"\26fa"}.glyphicon-blackboard:before{content:"\e218"}.glyphicon-bed:before{content:"\e219"}.glyphicon-apple:before{content:"\f8ff"}.glyphicon-erase:before{content:"\e221"}.glyphicon-hourglass:before{content:"\231b"}.glyphicon-lamp:before{content:"\e223"}.glyphicon-duplicate:before{content:"\e224"}.glyphicon-piggy-bank:before{content:"\e225"}.glyphicon-scissors:before{content:"\e226"}.glyphicon-bitcoin:before,.glyphicon-btc:before,.glyphicon-xbt:before{content:"\e227"}.glyphicon-jpy:before,.glyphicon-yen:before{content:"\00a5"}.glyphicon-rub:before,.glyphicon-ruble:before{content:"\20bd"}.glyphicon-scale:before{content:"\e230"}.glyphicon-ice-lolly:before{content:"\e231"}.glyphicon-ice-lolly-tasted:before{content:"\e232"}.glyphicon-education:before{content:"\e233"}.glyphicon-option-horizontal:before{content:"\e234"}.glyphicon-option-vertical:before{content:"\e235"}.glyphicon-menu-hamburger:before{content:"\e236"}.glyphicon-modal-window:before{content:"\e237"}.glyphicon-oil:before{content:"\e238"}.glyphicon-grain:before{content:"\e239"}.glyphicon-sunglasses:before{content:"\e240"}.glyphicon-text-size:before{content:"\e241"}.glyphicon-text-color:before{content:"\e242"}.glyphicon-text-background:before{content:"\e243"}.glyphicon-object-align-top:before{content:"\e244"}.glyphicon-object-align-bottom:before{content:"\e245"}.glyphicon-object-align-horizontal:before{content:"\e246"}.glyphicon-object-align-left:before{content:"\e247"}.glyphicon-object-align-vertical:before{content:"\e248"}.glyphicon-object-align-right:before{content:"\e249"}.glyphicon-triangle-right:before{content:"\e250"}.glyphicon-triangle-left:before{content:"\e251"}.glyphicon-triangle-bottom:before{content:"\e252"}.glyphicon-triangle-top:before{content:"\e253"}.glyphicon-console:before{content:"\e254"}.glyphicon-superscript:before{content:"\e255"}.glyphicon-subscript:before{content:"\e256"}.glyphicon-menu-left:before{content:"\e257"}.glyphicon-menu-right:before{content:"\e258"}.glyphicon-menu-down:before{content:"\e259"}.glyphicon-menu-up:before{content:"\e260"}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:13px;line-height:1.42857143;color:#000;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}figure{margin:0}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:3px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:2px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:18px;margin-bottom:18px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:18px;margin-bottom:9px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:9px;margin-bottom:9px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:33px}.h2,h2{font-size:27px}.h3,h3{font-size:23px}.h4,h4{font-size:17px}.h5,h5{font-size:13px}.h6,h6{font-size:12px}p{margin:0 0 9px}.lead{margin-bottom:18px;font-size:14px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:19.5px}}.small,small{font-size:92%}.mark,mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:8px;margin:36px 0 18px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:9px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:18px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:541px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:9px 18px;margin:0 0 18px;font-size:inherit;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\2014 \00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\00A0 \2014'}address{margin-bottom:18px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:monospace}code{padding:2px 4px;font-size:90%;background-color:#f9f2f4;border-radius:2px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:1px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;padding:8.5px;margin:0 0 9px;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:2px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:0;padding-right:0}@media (min-width:768px){.container{width:768px}}@media (min-width:992px){.container{width:940px}}@media (min-width:1200px){.container{width:1140px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:0;padding-right:0}.row{margin-left:0;margin-right:0}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-left:0;padding-right:0}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:18px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered,.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;float:none;display:table-column}table td[class*=col-],table th[class*=col-]{position:static;float:none;display:table-cell}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{overflow-x:auto;min-height:.01%}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:13.5px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:18px;font-size:19.5px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px \9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}output{display:block;padding-top:7px;font-size:13px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:32px;padding:6px 12px;font-size:13px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:2px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date],input[type=time],input[type=datetime-local],input[type=month]{line-height:32px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:45px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:18px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-left:-20px;margin-top:4px \9}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:400;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}.checkbox-inline.disabled,.checkbox.disabled label,.radio-inline.disabled,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio label,fieldset[disabled] .radio-inline,fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0;min-height:31px}.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}select.form-group-sm .form-control{height:30px;line-height:30px}select[multiple].form-group-sm .form-control,textarea.form-group-sm .form-control{height:auto}.form-group-sm .form-control-static{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;min-height:30px}.input-lg{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}select.input-lg{height:45px;line-height:45px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}select.form-group-lg .form-control{height:45px;line-height:45px}select[multiple].form-group-lg .form-control,textarea.form-group-lg .form-control{height:auto}.form-group-lg .form-control-static{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333;min-height:35px}.has-feedback{position:relative}.has-feedback .form-control{padding-right:40px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:32px;height:32px;line-height:32px;text-align:center;pointer-events:none}.input-lg+.form-control-feedback{width:45px;height:45px;line-height:45px}.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:23px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#404040}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .checkbox,.form-horizontal .radio{min-height:25px}.form-horizontal .form-group{margin-left:0;margin-right:0}.form-horizontal .has-feedback .form-control-feedback{right:0}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}.form-horizontal .form-group-lg .control-label{padding-top:14.33px}.form-horizontal .form-group-sm .control-label{padding-top:6px}}.btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:13px;line-height:1.42857143;border-radius:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{outline:0;background-image:none;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.active,.btn-default.focus,.btn-default:active,.btn-default:focus,.btn-default:hover,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled,.btn-default.disabled.active,.btn-default.disabled.focus,.btn-default.disabled:active,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled],.btn-default[disabled].active,.btn-default[disabled].focus,.btn-default[disabled]:active,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default,fieldset[disabled] .btn-default.active,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:active,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.active,.btn-primary.focus,.btn-primary:active,.btn-primary:focus,.btn-primary:hover,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled,.btn-primary.disabled.active,.btn-primary.disabled.focus,.btn-primary.disabled:active,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled],.btn-primary[disabled].active,.btn-primary[disabled].focus,.btn-primary[disabled]:active,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary,fieldset[disabled] .btn-primary.active,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:active,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.active,.btn-success.focus,.btn-success:active,.btn-success:focus,.btn-success:hover,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled,.btn-success.disabled.active,.btn-success.disabled.focus,.btn-success.disabled:active,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled],.btn-success[disabled].active,.btn-success[disabled].focus,.btn-success[disabled]:active,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success,fieldset[disabled] .btn-success.active,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:active,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.active,.btn-info.focus,.btn-info:active,.btn-info:focus,.btn-info:hover,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled,.btn-info.disabled.active,.btn-info.disabled.focus,.btn-info.disabled:active,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled],.btn-info[disabled].active,.btn-info[disabled].focus,.btn-info[disabled]:active,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info,fieldset[disabled] .btn-info.active,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:active,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.active,.btn-warning.focus,.btn-warning:active,.btn-warning:focus,.btn-warning:hover,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled,.btn-warning.disabled.active,.btn-warning.disabled.focus,.btn-warning.disabled:active,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled],.btn-warning[disabled].active,.btn-warning[disabled].focus,.btn-warning[disabled]:active,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning,fieldset[disabled] .btn-warning.active,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:active,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.active,.btn-danger.focus,.btn-danger:active,.btn-danger:focus,.btn-danger:hover,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled,.btn-danger.disabled.active,.btn-danger.disabled.focus,.btn-danger.disabled:active,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled],.btn-danger[disabled].active,.btn-danger[disabled].focus,.btn-danger[disabled]:active,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger,fieldset[disabled] .btn-danger.active,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:active,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{color:#337ab7;font-weight:400;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:1px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-property:height,visibility;transition-property:height,visibility;-webkit-transition-duration:.35s;transition-duration:.35s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:13px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:2px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{text-decoration:none;color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;outline:0;background-color:#337ab7}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid;content:""}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:541px){.navbar-right .dropdown-menu{left:auto;right:0}.navbar-right .dropdown-menu-left{left:0;right:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:2px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-bottom-left-radius:2px;border-top-right-radius:0;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:45px;padding:10px 16px;font-size:17px;line-height:1.3333333;border-radius:3px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:45px;line-height:45px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:1px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:13px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:2px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:1px}.input-group-addon.input-lg{padding:10px 16px;font-size:17px;border-radius:3px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:8px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:2px 2px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px;margin-right:0;border-radius:2px}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0;border-bottom:1px solid #ddd;border-radius:2px 2px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:2px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:2px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:2px 2px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:30px;margin-bottom:18px;border:1px solid transparent}.navbar-collapse{overflow-x:visible;padding-right:0;padding-left:0;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1);-webkit-overflow-scrolling:touch}.navbar-collapse.in{overflow-y:auto}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:540px)and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}.navbar-static-top{z-index:1000;border-width:0 0 1px}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:541px){.navbar{border-radius:2px}.navbar-header{float:left}.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-left:0;padding-right:0}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}.navbar-fixed-bottom,.navbar-fixed-top,.navbar-static-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:6px 0;font-size:17px;line-height:18px;height:30px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}.navbar-toggle{position:relative;float:right;margin-right:0;padding:9px 10px;margin-top:-2px;margin-bottom:-2px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:2px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:541px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:0}.navbar-toggle{display:none}}.navbar-nav{margin:3px 0}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:18px}@media (max-width:540px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:18px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:541px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:6px;padding-bottom:6px}}.navbar-form{padding:10px 0;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);margin:-1px 0}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:540px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-radius:2px 2px 0 0}.navbar-btn{margin-top:-1px;margin-bottom:-1px}.navbar-btn.btn-sm{margin-top:0;margin-bottom:0}.navbar-btn.btn-xs{margin-top:4px;margin-bottom:4px}.navbar-text{margin-top:6px;margin-bottom:6px}@media (min-width:541px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;-webkit-box-shadow:none;box-shadow:none}.navbar-text{float:left;margin-left:0;margin-right:0}.navbar-left{float:left!important;float:left}.navbar-right{float:right!important;float:right;margin-right:0}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-nav>li>a,.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{background-color:#e7e7e7;color:#555}@media (max-width:540px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>li>a,.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{background-color:#080808;color:#fff}@media (max-width:540px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:18px;list-style:none;background-color:#f5f5f5;border-radius:2px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{content:"/\00a0";padding:0 5px;color:#5e5e5e}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:18px 0;border-radius:2px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.42857143;text-decoration:none;color:#337ab7;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:2px;border-top-left-radius:2px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-bottom-right-radius:2px;border-top-right-radius:2px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7;cursor:default}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:17px}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-bottom-left-radius:3px;border-top-left-radius:3px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-bottom-right-radius:3px;border-top-right-radius:3px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-bottom-left-radius:1px;border-top-left-radius:1px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-bottom-right-radius:1px;border-top-right-radius:1px}.pager{padding-left:0;margin:18px 0;list-style:none;text-align:center}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;background-color:#fff;cursor:not-allowed}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;color:#fff;line-height:1;vertical-align:baseline;white-space:nowrap;text-align:center;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding:30px 15px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:20px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{border-radius:3px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding:48px 0}.container .jumbotron,.container-fluid .jumbotron{padding-left:60px;padding-right:60px}.jumbotron .h1,.jumbotron h1{font-size:58.5px}}.thumbnail{display:block;padding:4px;margin-bottom:18px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:2px;-webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-left:auto;margin-right:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#000}.alert{padding:15px;margin-bottom:18px;border:1px solid transparent;border-radius:2px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{overflow:hidden;height:18px;margin-bottom:18px;background-color:#f5f5f5;border-radius:2px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:18px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{zoom:1;overflow:hidden}.media-body{width:10000px}.media-object{display:block}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{margin-bottom:20px;padding-left:0}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:2px;border-top-left-radius:2px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:2px;border-bottom-left-radius:2px}a.list-group-item{color:#555}a.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover{text-decoration:none;color:#555;background-color:#f5f5f5}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{background-color:#eee;color:#777;cursor:not-allowed}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:18px;background-color:#fff;border:1px solid transparent;border-radius:2px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:1px;border-top-left-radius:1px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:15px;color:inherit}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:1px;border-bottom-left-radius:1px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-right-radius:1px;border-top-left-radius:1px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:1px;border-bottom-left-radius:1px}.list-group+.panel-footer,.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-left:15px;padding-right:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table:first-child{border-top-right-radius:1px;border-top-left-radius:1px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:1px;border-top-right-radius:1px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:1px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:1px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table:last-child{border-bottom-right-radius:1px;border-bottom-left-radius:1px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-left-radius:1px;border-bottom-right-radius:1px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:1px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:1px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-responsive{border:0;margin-bottom:0}.panel-group{margin-bottom:18px}.panel-group .panel{margin-bottom:0;border-radius:2px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:2px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:3px}.well-sm{padding:9px;border-radius:1px}.close{float:right;font-size:19.5px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:3px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5;min-height:16.43px}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:1.4;opacity:0;filter:alpha(opacity=0)}.tooltip.in{opacity:.9;filter:alpha(opacity=90)}.tooltip.top{margin-top:-3px;padding:5px 0}.tooltip.right{margin-left:3px;padding:0 5px}.tooltip.bottom{margin-top:3px;padding:5px 0}.tooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;border-radius:2px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:13px;font-weight:400;line-height:1.42857143;text-align:left;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:3px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);white-space:normal}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{margin:0;padding:8px 14px;font-size:13px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:2px 2px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{border-width:10px;content:""}.popover.top>.arrow{left:50%;margin-left:-11px;border-bottom-width:0;border-top-color:#999;border-top-color:rgba(0,0,0,.25);bottom:-11px}.popover.top>.arrow:after{content:" ";bottom:1px;margin-left:-10px;border-bottom-width:0;border-top-color:#fff}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-left-width:0;border-right-color:#999;border-right-color:rgba(0,0,0,.25)}.popover.right>.arrow:after{content:" ";left:1px;bottom:-10px;border-left-width:0;border-right-color:#fff}.popover.bottom>.arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);top:-11px}.popover.bottom>.arrow:after{content:" ";top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{content:" ";right:1px;border-right-width:0;border-left-color:#fff;bottom:-10px}.carousel{position:relative}.carousel-inner{position:relative;overflow:hidden;width:100%}.carousel-inner>.item{display:none;position:relative;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;-moz-transition:-moz-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;-moz-perspective:1000;perspective:1000}.carousel-inner>.item.active.right,.carousel-inner>.item.next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);left:0}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);left:0}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;left:0;bottom:0;width:15%;opacity:.5;filter:alpha(opacity=50);font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.carousel-control.right{left:auto;right:0;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.carousel-control:focus,.carousel-control:hover{outline:0;color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;margin-top:-10px;line-height:1;font-family:serif}.carousel-control .icon-prev:before{content:'\2039'}.carousel-control .icon-next:before{content:'\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;margin-left:-30%;padding-left:0;list-style:none;text-align:center}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;border:1px solid #fff;border-radius:10px;cursor:pointer;background-color:transparent}.carousel-indicators .active{margin:0;width:12px;height:12px;background-color:#fff}.carousel-caption{position:absolute;left:15%;right:15%;bottom:20px;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-15px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-15px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-15px}.carousel-caption{left:20%;right:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.item_buttons:after,.item_buttons:before,.modal-footer:after,.modal-footer:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{content:" ";display:table}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.item_buttons:after,.modal-footer:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}.visible-xs-block{display:block!important}.visible-xs-inline{display:inline!important}.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px)and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}.visible-sm-block{display:block!important}.visible-sm-inline{display:inline!important}.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px)and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}.visible-md-block{display:block!important}.visible-md-inline{display:inline!important}.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}.visible-lg-block{display:block!important}.visible-lg-inline{display:inline!important}.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px)and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px)and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}.hidden-print{display:none!important}}/*!
*
* Font Awesome
*
*//*!
 *  Font Awesome 4.2.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face{font-family:'FontAwesome';src:url(../components/font-awesome/fonts/fontawesome-webfont.eot?v=4.2.0);src:url(../components/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.2.0)format('embedded-opentype'),url(../components/font-awesome/fonts/fontawesome-webfont.woff?v=4.2.0)format('woff'),url(../components/font-awesome/fonts/fontawesome-webfont.ttf?v=4.2.0)format('truetype'),url(../components/font-awesome/fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular)format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\f000"}.fa-music:before{content:"\f001"}.fa-search:before{content:"\f002"}.fa-envelope-o:before{content:"\f003"}.fa-heart:before{content:"\f004"}.fa-star:before{content:"\f005"}.fa-star-o:before{content:"\f006"}.fa-user:before{content:"\f007"}.fa-film:before{content:"\f008"}.fa-th-large:before{content:"\f009"}.fa-th:before{content:"\f00a"}.fa-th-list:before{content:"\f00b"}.fa-check:before{content:"\f00c"}.fa-close:before,.fa-remove:before,.fa-times:before{content:"\f00d"}.fa-search-plus:before{content:"\f00e"}.fa-search-minus:before{content:"\f010"}.fa-power-off:before{content:"\f011"}.fa-signal:before{content:"\f012"}.fa-cog:before,.fa-gear:before{content:"\f013"}.fa-trash-o:before{content:"\f014"}.fa-home:before{content:"\f015"}.fa-file-o:before{content:"\f016"}.fa-clock-o:before{content:"\f017"}.fa-road:before{content:"\f018"}.fa-download:before{content:"\f019"}.fa-arrow-circle-o-down:before{content:"\f01a"}.fa-arrow-circle-o-up:before{content:"\f01b"}.fa-inbox:before{content:"\f01c"}.fa-play-circle-o:before{content:"\f01d"}.fa-repeat:before,.fa-rotate-right:before{content:"\f01e"}.fa-refresh:before{content:"\f021"}.fa-list-alt:before{content:"\f022"}.fa-lock:before{content:"\f023"}.fa-flag:before{content:"\f024"}.fa-headphones:before{content:"\f025"}.fa-volume-off:before{content:"\f026"}.fa-volume-down:before{content:"\f027"}.fa-volume-up:before{content:"\f028"}.fa-qrcode:before{content:"\f029"}.fa-barcode:before{content:"\f02a"}.fa-tag:before{content:"\f02b"}.fa-tags:before{content:"\f02c"}.fa-book:before{content:"\f02d"}.fa-bookmark:before{content:"\f02e"}.fa-print:before{content:"\f02f"}.fa-camera:before{content:"\f030"}.fa-font:before{content:"\f031"}.fa-bold:before{content:"\f032"}.fa-italic:before{content:"\f033"}.fa-text-height:before{content:"\f034"}.fa-text-width:before{content:"\f035"}.fa-align-left:before{content:"\f036"}.fa-align-center:before{content:"\f037"}.fa-align-right:before{content:"\f038"}.fa-align-justify:before{content:"\f039"}.fa-list:before{content:"\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\f03b"}.fa-indent:before{content:"\f03c"}.fa-video-camera:before{content:"\f03d"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:"\f03e"}.fa-pencil:before{content:"\f040"}.fa-map-marker:before{content:"\f041"}.fa-adjust:before{content:"\f042"}.fa-tint:before{content:"\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\f044"}.fa-share-square-o:before{content:"\f045"}.fa-check-square-o:before{content:"\f046"}.fa-arrows:before{content:"\f047"}.fa-step-backward:before{content:"\f048"}.fa-fast-backward:before{content:"\f049"}.fa-backward:before{content:"\f04a"}.fa-play:before{content:"\f04b"}.fa-pause:before{content:"\f04c"}.fa-stop:before{content:"\f04d"}.fa-forward:before{content:"\f04e"}.fa-fast-forward:before{content:"\f050"}.fa-step-forward:before{content:"\f051"}.fa-eject:before{content:"\f052"}.fa-chevron-left:before{content:"\f053"}.fa-chevron-right:before{content:"\f054"}.fa-plus-circle:before{content:"\f055"}.fa-minus-circle:before{content:"\f056"}.fa-times-circle:before{content:"\f057"}.fa-check-circle:before{content:"\f058"}.fa-question-circle:before{content:"\f059"}.fa-info-circle:before{content:"\f05a"}.fa-crosshairs:before{content:"\f05b"}.fa-times-circle-o:before{content:"\f05c"}.fa-check-circle-o:before{content:"\f05d"}.fa-ban:before{content:"\f05e"}.fa-arrow-left:before{content:"\f060"}.fa-arrow-right:before{content:"\f061"}.fa-arrow-up:before{content:"\f062"}.fa-arrow-down:before{content:"\f063"}.fa-mail-forward:before,.fa-share:before{content:"\f064"}.fa-expand:before{content:"\f065"}.fa-compress:before{content:"\f066"}.fa-plus:before{content:"\f067"}.fa-minus:before{content:"\f068"}.fa-asterisk:before{content:"\f069"}.fa-exclamation-circle:before{content:"\f06a"}.fa-gift:before{content:"\f06b"}.fa-leaf:before{content:"\f06c"}.fa-fire:before{content:"\f06d"}.fa-eye:before{content:"\f06e"}.fa-eye-slash:before{content:"\f070"}.fa-exclamation-triangle:before,.fa-warning:before{content:"\f071"}.fa-plane:before{content:"\f072"}.fa-calendar:before{content:"\f073"}.fa-random:before{content:"\f074"}.fa-comment:before{content:"\f075"}.fa-magnet:before{content:"\f076"}.fa-chevron-up:before{content:"\f077"}.fa-chevron-down:before{content:"\f078"}.fa-retweet:before{content:"\f079"}.fa-shopping-cart:before{content:"\f07a"}.fa-folder:before{content:"\f07b"}.fa-folder-open:before{content:"\f07c"}.fa-arrows-v:before{content:"\f07d"}.fa-arrows-h:before{content:"\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\f080"}.fa-twitter-square:before{content:"\f081"}.fa-facebook-square:before{content:"\f082"}.fa-camera-retro:before{content:"\f083"}.fa-key:before{content:"\f084"}.fa-cogs:before,.fa-gears:before{content:"\f085"}.fa-comments:before{content:"\f086"}.fa-thumbs-o-up:before{content:"\f087"}.fa-thumbs-o-down:before{content:"\f088"}.fa-star-half:before{content:"\f089"}.fa-heart-o:before{content:"\f08a"}.fa-sign-out:before{content:"\f08b"}.fa-linkedin-square:before{content:"\f08c"}.fa-thumb-tack:before{content:"\f08d"}.fa-external-link:before{content:"\f08e"}.fa-sign-in:before{content:"\f090"}.fa-trophy:before{content:"\f091"}.fa-github-square:before{content:"\f092"}.fa-upload:before{content:"\f093"}.fa-lemon-o:before{content:"\f094"}.fa-phone:before{content:"\f095"}.fa-square-o:before{content:"\f096"}.fa-bookmark-o:before{content:"\f097"}.fa-phone-square:before{content:"\f098"}.fa-twitter:before{content:"\f099"}.fa-facebook:before{content:"\f09a"}.fa-github:before{content:"\f09b"}.fa-unlock:before{content:"\f09c"}.fa-credit-card:before{content:"\f09d"}.fa-rss:before{content:"\f09e"}.fa-hdd-o:before{content:"\f0a0"}.fa-bullhorn:before{content:"\f0a1"}.fa-bell:before{content:"\f0f3"}.fa-certificate:before{content:"\f0a3"}.fa-hand-o-right:before{content:"\f0a4"}.fa-hand-o-left:before{content:"\f0a5"}.fa-hand-o-up:before{content:"\f0a6"}.fa-hand-o-down:before{content:"\f0a7"}.fa-arrow-circle-left:before{content:"\f0a8"}.fa-arrow-circle-right:before{content:"\f0a9"}.fa-arrow-circle-up:before{content:"\f0aa"}.fa-arrow-circle-down:before{content:"\f0ab"}.fa-globe:before{content:"\f0ac"}.fa-wrench:before{content:"\f0ad"}.fa-tasks:before{content:"\f0ae"}.fa-filter:before{content:"\f0b0"}.fa-briefcase:before{content:"\f0b1"}.fa-arrows-alt:before{content:"\f0b2"}.fa-group:before,.fa-users:before{content:"\f0c0"}.fa-chain:before,.fa-link:before{content:"\f0c1"}.fa-cloud:before{content:"\f0c2"}.fa-flask:before{content:"\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\f0c5"}.fa-paperclip:before{content:"\f0c6"}.fa-floppy-o:before,.fa-save:before{content:"\f0c7"}.fa-square:before{content:"\f0c8"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:"\f0c9"}.fa-list-ul:before{content:"\f0ca"}.fa-list-ol:before{content:"\f0cb"}.fa-strikethrough:before{content:"\f0cc"}.fa-underline:before{content:"\f0cd"}.fa-table:before{content:"\f0ce"}.fa-magic:before{content:"\f0d0"}.fa-truck:before{content:"\f0d1"}.fa-pinterest:before{content:"\f0d2"}.fa-pinterest-square:before{content:"\f0d3"}.fa-google-plus-square:before{content:"\f0d4"}.fa-google-plus:before{content:"\f0d5"}.fa-money:before{content:"\f0d6"}.fa-caret-down:before{content:"\f0d7"}.fa-caret-up:before{content:"\f0d8"}.fa-caret-left:before{content:"\f0d9"}.fa-caret-right:before{content:"\f0da"}.fa-columns:before{content:"\f0db"}.fa-sort:before,.fa-unsorted:before{content:"\f0dc"}.fa-sort-desc:before,.fa-sort-down:before{content:"\f0dd"}.fa-sort-asc:before,.fa-sort-up:before{content:"\f0de"}.fa-envelope:before{content:"\f0e0"}.fa-linkedin:before{content:"\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\f0e2"}.fa-gavel:before,.fa-legal:before{content:"\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\f0e4"}.fa-comment-o:before{content:"\f0e5"}.fa-comments-o:before{content:"\f0e6"}.fa-bolt:before,.fa-flash:before{content:"\f0e7"}.fa-sitemap:before{content:"\f0e8"}.fa-umbrella:before{content:"\f0e9"}.fa-clipboard:before,.fa-paste:before{content:"\f0ea"}.fa-lightbulb-o:before{content:"\f0eb"}.fa-exchange:before{content:"\f0ec"}.fa-cloud-download:before{content:"\f0ed"}.fa-cloud-upload:before{content:"\f0ee"}.fa-user-md:before{content:"\f0f0"}.fa-stethoscope:before{content:"\f0f1"}.fa-suitcase:before{content:"\f0f2"}.fa-bell-o:before{content:"\f0a2"}.fa-coffee:before{content:"\f0f4"}.fa-cutlery:before{content:"\f0f5"}.fa-file-text-o:before{content:"\f0f6"}.fa-building-o:before{content:"\f0f7"}.fa-hospital-o:before{content:"\f0f8"}.fa-ambulance:before{content:"\f0f9"}.fa-medkit:before{content:"\f0fa"}.fa-fighter-jet:before{content:"\f0fb"}.fa-beer:before{content:"\f0fc"}.fa-h-square:before{content:"\f0fd"}.fa-plus-square:before{content:"\f0fe"}.fa-angle-double-left:before{content:"\f100"}.fa-angle-double-right:before{content:"\f101"}.fa-angle-double-up:before{content:"\f102"}.fa-angle-double-down:before{content:"\f103"}.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa-angle-up:before{content:"\f106"}.fa-angle-down:before{content:"\f107"}.fa-desktop:before{content:"\f108"}.fa-laptop:before{content:"\f109"}.fa-tablet:before{content:"\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\f10b"}.fa-circle-o:before{content:"\f10c"}.fa-quote-left:before{content:"\f10d"}.fa-quote-right:before{content:"\f10e"}.fa-spinner:before{content:"\f110"}.fa-circle:before{content:"\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\f112"}.fa-github-alt:before{content:"\f113"}.fa-folder-o:before{content:"\f114"}.fa-folder-open-o:before{content:"\f115"}.fa-smile-o:before{content:"\f118"}.fa-frown-o:before{content:"\f119"}.fa-meh-o:before{content:"\f11a"}.fa-gamepad:before{content:"\f11b"}.fa-keyboard-o:before{content:"\f11c"}.fa-flag-o:before{content:"\f11d"}.fa-flag-checkered:before{content:"\f11e"}.fa-terminal:before{content:"\f120"}.fa-code:before{content:"\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\f123"}.fa-location-arrow:before{content:"\f124"}.fa-crop:before{content:"\f125"}.fa-code-fork:before{content:"\f126"}.fa-chain-broken:before,.fa-unlink:before{content:"\f127"}.fa-question:before{content:"\f128"}.fa-info:before{content:"\f129"}.fa-exclamation:before{content:"\f12a"}.fa-superscript:before{content:"\f12b"}.fa-subscript:before{content:"\f12c"}.fa-eraser:before{content:"\f12d"}.fa-puzzle-piece:before{content:"\f12e"}.fa-microphone:before{content:"\f130"}.fa-microphone-slash:before{content:"\f131"}.fa-shield:before{content:"\f132"}.fa-calendar-o:before{content:"\f133"}.fa-fire-extinguisher:before{content:"\f134"}.fa-rocket:before{content:"\f135"}.fa-maxcdn:before{content:"\f136"}.fa-chevron-circle-left:before{content:"\f137"}.fa-chevron-circle-right:before{content:"\f138"}.fa-chevron-circle-up:before{content:"\f139"}.fa-chevron-circle-down:before{content:"\f13a"}.fa-html5:before{content:"\f13b"}.fa-css3:before{content:"\f13c"}.fa-anchor:before{content:"\f13d"}.fa-unlock-alt:before{content:"\f13e"}.fa-bullseye:before{content:"\f140"}.fa-ellipsis-h:before{content:"\f141"}.fa-ellipsis-v:before{content:"\f142"}.fa-rss-square:before{content:"\f143"}.fa-play-circle:before{content:"\f144"}.fa-ticket:before{content:"\f145"}.fa-minus-square:before{content:"\f146"}.fa-minus-square-o:before{content:"\f147"}.fa-level-up:before{content:"\f148"}.fa-level-down:before{content:"\f149"}.fa-check-square:before{content:"\f14a"}.fa-pencil-square:before{content:"\f14b"}.fa-external-link-square:before{content:"\f14c"}.fa-share-square:before{content:"\f14d"}.fa-compass:before{content:"\f14e"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:"\f150"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:"\f151"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:"\f152"}.fa-eur:before,.fa-euro:before{content:"\f153"}.fa-gbp:before{content:"\f154"}.fa-dollar:before,.fa-usd:before{content:"\f155"}.fa-inr:before,.fa-rupee:before{content:"\f156"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:"\f157"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:"\f158"}.fa-krw:before,.fa-won:before{content:"\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\f15a"}.fa-file:before{content:"\f15b"}.fa-file-text:before{content:"\f15c"}.fa-sort-alpha-asc:before{content:"\f15d"}.fa-sort-alpha-desc:before{content:"\f15e"}.fa-sort-amount-asc:before{content:"\f160"}.fa-sort-amount-desc:before{content:"\f161"}.fa-sort-numeric-asc:before{content:"\f162"}.fa-sort-numeric-desc:before{content:"\f163"}.fa-thumbs-up:before{content:"\f164"}.fa-thumbs-down:before{content:"\f165"}.fa-youtube-square:before{content:"\f166"}.fa-youtube:before{content:"\f167"}.fa-xing:before{content:"\f168"}.fa-xing-square:before{content:"\f169"}.fa-youtube-play:before{content:"\f16a"}.fa-dropbox:before{content:"\f16b"}.fa-stack-overflow:before{content:"\f16c"}.fa-instagram:before{content:"\f16d"}.fa-flickr:before{content:"\f16e"}.fa-adn:before{content:"\f170"}.fa-bitbucket:before{content:"\f171"}.fa-bitbucket-square:before{content:"\f172"}.fa-tumblr:before{content:"\f173"}.fa-tumblr-square:before{content:"\f174"}.fa-long-arrow-down:before{content:"\f175"}.fa-long-arrow-up:before{content:"\f176"}.fa-long-arrow-left:before{content:"\f177"}.fa-long-arrow-right:before{content:"\f178"}.fa-apple:before{content:"\f179"}.fa-windows:before{content:"\f17a"}.fa-android:before{content:"\f17b"}.fa-linux:before{content:"\f17c"}.fa-dribbble:before{content:"\f17d"}.fa-skype:before{content:"\f17e"}.fa-foursquare:before{content:"\f180"}.fa-trello:before{content:"\f181"}.fa-female:before{content:"\f182"}.fa-male:before{content:"\f183"}.fa-gittip:before{content:"\f184"}.fa-sun-o:before{content:"\f185"}.fa-moon-o:before{content:"\f186"}.fa-archive:before{content:"\f187"}.fa-bug:before{content:"\f188"}.fa-vk:before{content:"\f189"}.fa-weibo:before{content:"\f18a"}.fa-renren:before{content:"\f18b"}.fa-pagelines:before{content:"\f18c"}.fa-stack-exchange:before{content:"\f18d"}.fa-arrow-circle-o-right:before{content:"\f18e"}.fa-arrow-circle-o-left:before{content:"\f190"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:"\f191"}.fa-dot-circle-o:before{content:"\f192"}.fa-wheelchair:before{content:"\f193"}.fa-vimeo-square:before{content:"\f194"}.fa-try:before,.fa-turkish-lira:before{content:"\f195"}.fa-plus-square-o:before{content:"\f196"}.fa-space-shuttle:before{content:"\f197"}.fa-slack:before{content:"\f198"}.fa-envelope-square:before{content:"\f199"}.fa-wordpress:before{content:"\f19a"}.fa-openid:before{content:"\f19b"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:"\f19c"}.fa-graduation-cap:before,.fa-mortar-board:before{content:"\f19d"}.fa-yahoo:before{content:"\f19e"}.fa-google:before{content:"\f1a0"}.fa-reddit:before{content:"\f1a1"}.fa-reddit-square:before{content:"\f1a2"}.fa-stumbleupon-circle:before{content:"\f1a3"}.fa-stumbleupon:before{content:"\f1a4"}.fa-delicious:before{content:"\f1a5"}.fa-digg:before{content:"\f1a6"}.fa-pied-piper:before{content:"\f1a7"}.fa-pied-piper-alt:before{content:"\f1a8"}.fa-drupal:before{content:"\f1a9"}.fa-joomla:before{content:"\f1aa"}.fa-language:before{content:"\f1ab"}.fa-fax:before{content:"\f1ac"}.fa-building:before{content:"\f1ad"}.fa-child:before{content:"\f1ae"}.fa-paw:before{content:"\f1b0"}.fa-spoon:before{content:"\f1b1"}.fa-cube:before{content:"\f1b2"}.fa-cubes:before{content:"\f1b3"}.fa-behance:before{content:"\f1b4"}.fa-behance-square:before{content:"\f1b5"}.fa-steam:before{content:"\f1b6"}.fa-steam-square:before{content:"\f1b7"}.fa-recycle:before{content:"\f1b8"}.fa-automobile:before,.fa-car:before{content:"\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\f1ba"}.fa-tree:before{content:"\f1bb"}.fa-spotify:before{content:"\f1bc"}.fa-deviantart:before{content:"\f1bd"}.fa-soundcloud:before{content:"\f1be"}.fa-database:before{content:"\f1c0"}.fa-file-pdf-o:before{content:"\f1c1"}.fa-file-word-o:before{content:"\f1c2"}.fa-file-excel-o:before{content:"\f1c3"}.fa-file-powerpoint-o:before{content:"\f1c4"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:"\f1c5"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:"\f1c6"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:"\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\f1c8"}.fa-file-code-o:before{content:"\f1c9"}.fa-vine:before{content:"\f1ca"}.fa-codepen:before{content:"\f1cb"}.fa-jsfiddle:before{content:"\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:"\f1cd"}.fa-circle-o-notch:before{content:"\f1ce"}.fa-ra:before,.fa-rebel:before{content:"\f1d0"}.fa-empire:before,.fa-ge:before{content:"\f1d1"}.fa-git-square:before{content:"\f1d2"}.fa-git:before{content:"\f1d3"}.fa-hacker-news:before{content:"\f1d4"}.fa-tencent-weibo:before{content:"\f1d5"}.fa-qq:before{content:"\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\f1d7"}.fa-paper-plane:before,.fa-send:before{content:"\f1d8"}.fa-paper-plane-o:before,.fa-send-o:before{content:"\f1d9"}.fa-history:before{content:"\f1da"}.fa-circle-thin:before{content:"\f1db"}.fa-header:before{content:"\f1dc"}.fa-paragraph:before{content:"\f1dd"}.fa-sliders:before{content:"\f1de"}.fa-share-alt:before{content:"\f1e0"}.fa-share-alt-square:before{content:"\f1e1"}.fa-bomb:before{content:"\f1e2"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:"\f1e3"}.fa-tty:before{content:"\f1e4"}.fa-binoculars:before{content:"\f1e5"}.fa-plug:before{content:"\f1e6"}.fa-slideshare:before{content:"\f1e7"}.fa-twitch:before{content:"\f1e8"}.fa-yelp:before{content:"\f1e9"}.fa-newspaper-o:before{content:"\f1ea"}.fa-wifi:before{content:"\f1eb"}.fa-calculator:before{content:"\f1ec"}.fa-paypal:before{content:"\f1ed"}.fa-google-wallet:before{content:"\f1ee"}.fa-cc-visa:before{content:"\f1f0"}.fa-cc-mastercard:before{content:"\f1f1"}.fa-cc-discover:before{content:"\f1f2"}.fa-cc-amex:before{content:"\f1f3"}.fa-cc-paypal:before{content:"\f1f4"}.fa-cc-stripe:before{content:"\f1f5"}.fa-bell-slash:before{content:"\f1f6"}.fa-bell-slash-o:before{content:"\f1f7"}.fa-trash:before{content:"\f1f8"}.fa-copyright:before{content:"\f1f9"}.fa-at:before{content:"\f1fa"}.fa-eyedropper:before{content:"\f1fb"}.fa-paint-brush:before{content:"\f1fc"}.fa-birthday-cake:before{content:"\f1fd"}.fa-area-chart:before{content:"\f1fe"}.fa-pie-chart:before{content:"\f200"}.fa-line-chart:before{content:"\f201"}.fa-lastfm:before{content:"\f202"}.fa-lastfm-square:before{content:"\f203"}.fa-toggle-off:before{content:"\f204"}.fa-toggle-on:before{content:"\f205"}.fa-bicycle:before{content:"\f206"}.fa-bus:before{content:"\f207"}.fa-ioxhost:before{content:"\f208"}.fa-angellist:before{content:"\f209"}.fa-cc:before{content:"\f20a"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:"\f20b"}.fa-meanpath:before{content:"\f20c"}/*!
*
* IPython base
*
*/.modal.fade .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}code{color:#000}pre{font-size:inherit;line-height:inherit}label{font-weight:400}.border-box-sizing{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.corner-all{border-radius:2px}.no-padding{padding:0}.hbox{display:-webkit-box;-webkit-box-orient:horizontal;display:-moz-box;-moz-box-orient:horizontal;display:box;box-orient:horizontal;box-align:stretch;display:flex;flex-direction:row;align-items:stretch}.hbox>*{-webkit-box-flex:0;-moz-box-flex:0;box-flex:0;flex:none}.vbox{display:-webkit-box;-webkit-box-orient:vertical;display:-moz-box;-moz-box-orient:vertical;display:box;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch}.vbox>*{-webkit-box-flex:0;-moz-box-flex:0;box-flex:0;flex:none}.hbox.reverse,.reverse,.vbox.reverse{-webkit-box-direction:reverse;-moz-box-direction:reverse;box-direction:reverse;flex-direction:row-reverse}.box-flex0,.hbox.box-flex0,.vbox.box-flex0{-webkit-box-flex:0;-moz-box-flex:0;box-flex:0;flex:none;width:auto}.box-flex1,.hbox.box-flex1,.vbox.box-flex1{-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;flex:1}.box-flex,.hbox.box-flex,.vbox.box-flex{-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;flex:1}.box-flex2,.hbox.box-flex2,.vbox.box-flex2{-webkit-box-flex:2;-moz-box-flex:2;box-flex:2;flex:2}.box-group1{-webkit-box-flex-group:1;-moz-box-flex-group:1;box-flex-group:1}.box-group2{-webkit-box-flex-group:2;-moz-box-flex-group:2;box-flex-group:2}.hbox.start,.start,.vbox.start{-webkit-box-pack:start;-moz-box-pack:start;box-pack:start;justify-content:flex-start}.end,.hbox.end,.vbox.end{-webkit-box-pack:end;-moz-box-pack:end;box-pack:end;justify-content:flex-end}.center,.hbox.center,.vbox.center{-webkit-box-pack:center;-moz-box-pack:center;box-pack:center;justify-content:center}.baseline,.hbox.baseline,.vbox.baseline{-webkit-box-pack:baseline;-moz-box-pack:baseline;box-pack:baseline;justify-content:baseline}.hbox.stretch,.stretch,.vbox.stretch{-webkit-box-pack:stretch;-moz-box-pack:stretch;box-pack:stretch;justify-content:stretch}.align-start,.hbox.align-start,.vbox.align-start{-webkit-box-align:start;-moz-box-align:start;box-align:start;align-items:flex-start}.align-end,.hbox.align-end,.vbox.align-end{-webkit-box-align:end;-moz-box-align:end;box-align:end;align-items:flex-end}.align-center,.hbox.align-center,.vbox.align-center{-webkit-box-align:center;-moz-box-align:center;box-align:center;align-items:center}.align-baseline,.hbox.align-baseline,.vbox.align-baseline{-webkit-box-align:baseline;-moz-box-align:baseline;box-align:baseline;align-items:baseline}.align-stretch,.hbox.align-stretch,.vbox.align-stretch{-webkit-box-align:stretch;-moz-box-align:stretch;box-align:stretch;align-items:stretch}div.error{margin:2em;text-align:center}div.error>h1{font-size:500%;line-height:normal}div.error>p{font-size:200%;line-height:normal}div.traceback-wrapper{text-align:left;max-width:800px;margin:auto}body{position:absolute;left:0;right:0;top:0;bottom:0;overflow:visible}#header{display:none;background-color:#fff;position:relative;z-index:100}#header #header-container{padding-bottom:5px;padding-top:5px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}#header .header-bar{width:100%;height:1px;background:#e7e7e7;margin-bottom:-1px}#header-spacer{width:100%;visibility:hidden}@media print{#header{display:none!important}#header-spacer{display:none}}#ipython_notebook{padding-left:0;padding-top:1px;padding-bottom:1px}@media (max-width:991px){#ipython_notebook{margin-left:10px}}#noscript{width:auto;padding-top:16px;padding-bottom:16px;text-align:center;font-size:22px;color:red;font-weight:700}#ipython_notebook img{height:28px}#site{width:100%;display:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;overflow:auto}@media print{#site{height:auto!important}}.ui-button .ui-button-text{padding:.2em .8em;font-size:77%}input.ui-button{padding:.3em .9em}span#login_widget{float:right}#logout,span#login_widget>.button{color:#333;background-color:#fff;border-color:#ccc}#logout.active,#logout.focus,#logout:active,#logout:focus,#logout:hover,.open>.dropdown-toggle#logout,.open>.dropdown-togglespan#login_widget>.button,span#login_widget>.button.active,span#login_widget>.button.focus,span#login_widget>.button:active,span#login_widget>.button:focus,span#login_widget>.button:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}#logout.active,#logout:active,.open>.dropdown-toggle#logout,.open>.dropdown-togglespan#login_widget>.button,span#login_widget>.button.active,span#login_widget>.button:active{background-image:none}#logout.disabled,#logout.disabled.active,#logout.disabled.focus,#logout.disabled:active,#logout.disabled:focus,#logout.disabled:hover,#logout[disabled],#logout[disabled].active,#logout[disabled].focus,#logout[disabled]:active,#logout[disabled]:focus,#logout[disabled]:hover,fieldset[disabled] #logout,fieldset[disabled] #logout.active,fieldset[disabled] #logout.focus,fieldset[disabled] #logout:active,fieldset[disabled] #logout:focus,fieldset[disabled] #logout:hover,fieldset[disabled] span#login_widget>.button,fieldset[disabled] span#login_widget>.button.active,fieldset[disabled] span#login_widget>.button.focus,fieldset[disabled] span#login_widget>.button:active,fieldset[disabled] span#login_widget>.button:focus,fieldset[disabled] span#login_widget>.button:hover,span#login_widget>.button.disabled,span#login_widget>.button.disabled.active,span#login_widget>.button.disabled.focus,span#login_widget>.button.disabled:active,span#login_widget>.button.disabled:focus,span#login_widget>.button.disabled:hover,span#login_widget>.button[disabled],span#login_widget>.button[disabled].active,span#login_widget>.button[disabled].focus,span#login_widget>.button[disabled]:active,span#login_widget>.button[disabled]:focus,span#login_widget>.button[disabled]:hover{background-color:#fff;border-color:#ccc}#logout .badge,span#login_widget>.button .badge{color:#fff;background-color:#333}.nav-header{text-transform:none}#header>span{margin-top:10px}.modal_stretch .modal-dialog{display:-webkit-box;-webkit-box-orient:vertical;display:-moz-box;-moz-box-orient:vertical;display:box;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch;min-height:80vh}.modal_stretch .modal-dialog .modal-body{max-height:calc(100vh - 200px);overflow:auto;flex:1}@media (min-width:768px){.modal .modal-dialog{width:700px}select.form-control{margin-left:12px;margin-right:12px}}/*!
*
* IPython auth
*
*/.center-nav{display:inline-block;margin-bottom:-4px}/*!
*
* IPython tree view
*
*/.alternate_upload{background-color:none;display:inline}.alternate_upload.form{padding:0;margin:0}.alternate_upload input.fileinput{text-align:center;vertical-align:middle;display:inline;opacity:0;z-index:2;width:12ex;margin-right:-12ex}.alternate_upload .btn-upload{height:22px}ul#tabs{margin-bottom:4px}ul#tabs a{padding-top:6px;padding-bottom:4px}ul.breadcrumb a:focus,ul.breadcrumb a:hover{text-decoration:none}ul.breadcrumb i.icon-home{font-size:16px;margin-right:4px}ul.breadcrumb span{color:#5e5e5e}.list_toolbar{padding:4px 0;vertical-align:middle}.list_toolbar .tree-buttons{padding-top:1px}.dynamic-buttons{padding-top:3px;display:inline-block}.list_toolbar [class*=span]{min-height:24px}.list_header{font-weight:700;background-color:#eee}.list_placeholder{font-weight:700;padding:4px 7px}.list_container{margin-top:4px;margin-bottom:20px;border:1px solid #ddd;border-radius:2px}.list_container>div{border-bottom:1px solid #ddd}.list_container>div:hover .list-item{background-color:red}.list_container>div:last-child{border:none}.list_item:hover .list_item{background-color:#ddd}.list_item a{text-decoration:none}.list_item:hover{background-color:#fafafa}.action_col{text-align:right}.list_header>div,.list_item>div{line-height:22px;padding:4px 7px}.list_header>div input,.list_item>div input{margin-right:7px;margin-left:14px;vertical-align:baseline;line-height:22px;position:relative;top:-1px}.list_header>div .item_link,.list_item>div .item_link{margin-left:-1px;vertical-align:baseline;line-height:22px}.new-file input[type=checkbox]{visibility:hidden}.item_name{line-height:22px;height:24px}.item_icon{font-size:14px;color:#5e5e5e;margin-right:7px;margin-left:7px;line-height:22px;vertical-align:baseline}.item_buttons{line-height:1em;margin-left:-5px}.item_buttons .btn-group,.item_buttons .input-group{float:left}.item_buttons>.btn,.item_buttons>.btn-group,.item_buttons>.input-group{margin-left:5px}.item_buttons .btn{min-width:13ex}.item_buttons .running-indicator{padding-top:4px;color:#5cb85c}.toolbar_info{height:24px;line-height:24px}input.engine_num_input,input.nbname_input{padding-top:3px;padding-bottom:3px;height:22px;line-height:14px;margin:0}input.engine_num_input{width:60px}.highlight_text{color:#00f}#project_name{display:inline-block;padding-left:7px;margin-left:-2px}#project_name>.breadcrumb{padding:0;margin-bottom:0;background-color:transparent;font-weight:700}#tree-selector{padding-right:0}#button-select-all{min-width:50px}#select-all{margin-left:7px;margin-right:2px}.menu_icon{margin-right:2px}.tab-content .row{margin-left:0;margin-right:0}.folder_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f114"}.folder_icon:before.pull-left{margin-right:.3em}.folder_icon:before.pull-right{margin-left:.3em}.notebook_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f02d";position:relative;top:-1px}.notebook_icon:before.pull-left{margin-right:.3em}.notebook_icon:before.pull-right{margin-left:.3em}.running_notebook_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f02d";position:relative;top:-1px;color:#5cb85c}.running_notebook_icon:before.pull-left{margin-right:.3em}.running_notebook_icon:before.pull-right{margin-left:.3em}.file_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f016";position:relative;top:-2px}.file_icon:before.pull-left{margin-right:.3em}.file_icon:before.pull-right{margin-left:.3em}#notebook_toolbar .pull-right{padding-top:0;margin-right:-1px}ul#new-menu{left:auto;right:0}.kernel-menu-icon{padding-right:12px;width:24px;content:"\f096"}.kernel-menu-icon:before{content:"\f096"}.kernel-menu-icon-current:before{content:"\f00c"}#tab_content{padding-top:20px}#running .panel-group .panel{margin-top:3px;margin-bottom:1em}#running .panel-group .panel .panel-heading{background-color:#eee;line-height:22px;padding:4px 7px}#running .panel-group .panel .panel-heading a:focus,#running .panel-group .panel .panel-heading a:hover{text-decoration:none}#running .panel-group .panel .panel-body{padding:0}#running .panel-group .panel .panel-body .list_container{margin-top:0;margin-bottom:0;border:0;border-radius:0}#running .panel-group .panel .panel-body .list_container .list_item{border-bottom:1px solid #ddd}#running .panel-group .panel .panel-body .list_container .list_item:last-child{border-bottom:0}.delete-button,.duplicate-button,.rename-button,.shutdown-button{display:none}.dynamic-instructions{display:inline-block;padding-top:4px}/*!
*
* IPython text editor webapp
*
*/.selected-keymap i.fa{padding:0 5px}.selected-keymap i.fa:before{content:"\f00c"}#mode-menu{overflow:auto;max-height:20em}.edit_app #header{-webkit-box-shadow:0 0 12px 1px rgba(87,87,87,.2);box-shadow:0 0 12px 1px rgba(87,87,87,.2)}.edit_app #menubar .navbar{margin-bottom:-1px}.dirty-indicator{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:20px}.dirty-indicator.pull-left{margin-right:.3em}.dirty-indicator.pull-right{margin-left:.3em}.dirty-indicator-dirty{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:20px}.dirty-indicator-dirty.pull-left{margin-right:.3em}.dirty-indicator-dirty.pull-right{margin-left:.3em}.dirty-indicator-clean{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:20px}.dirty-indicator-clean.pull-left{margin-right:.3em}.dirty-indicator-clean.pull-right{margin-left:.3em}.dirty-indicator-clean:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f00c"}.dirty-indicator-clean:before.pull-left{margin-right:.3em}.dirty-indicator-clean:before.pull-right{margin-left:.3em}#filename{font-size:16pt;display:table;padding:0 5px}#current-mode{padding-left:5px;padding-right:5px}#texteditor-backdrop{padding-top:20px;padding-bottom:20px}@media not print{#texteditor-backdrop{background-color:#eee}}@media print{#texteditor-backdrop #texteditor-container .CodeMirror-gutter,#texteditor-backdrop #texteditor-container .CodeMirror-gutters{background-color:#fff}}@media not print{#texteditor-backdrop #texteditor-container .CodeMirror-gutter,#texteditor-backdrop #texteditor-container .CodeMirror-gutters{background-color:#fff}#texteditor-backdrop #texteditor-container{padding:0;background-color:#fff;-webkit-box-shadow:0 0 12px 1px rgba(87,87,87,.2);box-shadow:0 0 12px 1px rgba(87,87,87,.2)}}/*!
*
* IPython notebook
*
*/.ansibold{font-weight:700}.ansiblack{color:#000}.ansired{color:#8b0000}.ansigreen{color:#006400}.ansiyellow{color:#c4a000}.ansiblue{color:#00008b}.ansipurple{color:#9400d3}.ansicyan{color:#4682b4}.ansigray{color:gray}.ansibgblack{background-color:#000}.ansibgred{background-color:red}.ansibggreen{background-color:green}.ansibgyellow{background-color:#ff0}.ansibgblue{background-color:#00f}.ansibgpurple{background-color:#ff00ff}.ansibgcyan{background-color:#0ff}.ansibggray{background-color:gray}div.cell{border:1px solid transparent;display:-webkit-box;-webkit-box-orient:vertical;display:-moz-box;-moz-box-orient:vertical;display:box;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch;border-radius:2px;box-sizing:border-box;-moz-box-sizing:border-box;border-width:thin;border-style:solid;width:100%;padding:5px;margin:0;outline:0}div.cell.selected{border-color:#ababab}@media print{div.cell.selected{border-color:transparent}}.edit_mode div.cell.selected{border-color:green}.prompt{min-width:14ex;padding:.4em;margin:0;font-family:monospace;text-align:right;line-height:1.21429em}div.inner_cell{display:-webkit-box;-webkit-box-orient:vertical;display:-moz-box;-moz-box-orient:vertical;display:box;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;flex:1}@-moz-document url-prefix(){div.inner_cell{overflow-x:hidden}}div.input_area{border:1px solid #cfcfcf;border-radius:2px;background:#f7f7f7;line-height:1.21429em}div.prompt:empty{padding-top:0;padding-bottom:0}div.unrecognized_cell{padding:5px 5px 5px 0;display:-webkit-box;-webkit-box-orient:horizontal;display:-moz-box;-moz-box-orient:horizontal;display:box;box-orient:horizontal;box-align:stretch;display:flex;flex-direction:row;align-items:stretch}div.unrecognized_cell .inner_cell{border-radius:2px;padding:5px;font-weight:700;color:red;border:1px solid #cfcfcf;background:#eaeaea}div.unrecognized_cell .inner_cell a,div.unrecognized_cell .inner_cell a:hover{color:inherit;text-decoration:none}@media (max-width:540px){.prompt{text-align:left}div.unrecognized_cell>div.prompt{display:none}}div.code_cell{}div.input{page-break-inside:avoid;display:-webkit-box;-webkit-box-orient:horizontal;display:-moz-box;-moz-box-orient:horizontal;display:box;box-orient:horizontal;box-align:stretch;display:flex;flex-direction:row;align-items:stretch}@media (max-width:540px){div.input{-webkit-box-orient:vertical;-moz-box-orient:vertical;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch}}div.input_prompt{color:navy;border-top:1px solid transparent}div.input_area>div.highlight{margin:.4em;border:none;padding:0;background-color:transparent}div.input_area>div.highlight>pre{margin:0;border:none;padding:0;background-color:transparent}.CodeMirror{line-height:1.21429em;font-size:14px;height:auto;background:0 0}.CodeMirror-scroll{overflow-y:hidden;overflow-x:auto}.CodeMirror-lines{padding:.4em}.CodeMirror-linenumber{padding:0 8px 0 4px}.CodeMirror-gutters{border-bottom-left-radius:2px;border-top-left-radius:2px}.CodeMirror pre{padding:0;border:0;border-radius:0}.highlight-base,.highlight-variable{color:#000}.highlight-variable-2{color:#1a1a1a}.highlight-variable-3{color:#333}.highlight-string{color:#BA2121}.highlight-comment{color:#408080;font-style:italic}.highlight-number{color:#080}.highlight-atom{color:#88F}.highlight-keyword{color:green;font-weight:700}.highlight-builtin{color:green}.highlight-error{color:red}.highlight-operator{color:#A2F;font-weight:700}.highlight-meta{color:#A2F}.highlight-def{color:#00f}.highlight-string-2{color:#f50}.highlight-qualifier{color:#555}.highlight-bracket{color:#997}.highlight-tag{color:#170}.highlight-attribute{color:#00c}.highlight-header{color:#00f}.highlight-quote{color:#090}.highlight-link{color:#00c}.cm-s-ipython span.cm-keyword{color:green;font-weight:700}.cm-s-ipython span.cm-atom{color:#88F}.cm-s-ipython span.cm-number{color:#080}.cm-s-ipython span.cm-def{color:#00f}.cm-s-ipython span.cm-variable{color:#000}.cm-s-ipython span.cm-operator{color:#A2F;font-weight:700}.cm-s-ipython span.cm-variable-2{color:#1a1a1a}.cm-s-ipython span.cm-variable-3{color:#333}.cm-s-ipython span.cm-comment{color:#408080;font-style:italic}.cm-s-ipython span.cm-string{color:#BA2121}.cm-s-ipython span.cm-string-2{color:#f50}.cm-s-ipython span.cm-meta{color:#A2F}.cm-s-ipython span.cm-qualifier{color:#555}.cm-s-ipython span.cm-builtin{color:green}.cm-s-ipython span.cm-bracket{color:#997}.cm-s-ipython span.cm-tag{color:#170}.cm-s-ipython span.cm-attribute{color:#00c}.cm-s-ipython span.cm-header{color:#00f}.cm-s-ipython span.cm-quote{color:#090}.cm-s-ipython span.cm-link{color:#00c}.cm-s-ipython span.cm-error{color:red}.cm-s-ipython span.cm-tab{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=')right no-repeat}div.output_wrapper{display:-webkit-box;-webkit-box-align:stretch;display:-moz-box;-moz-box-align:stretch;display:box;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch;z-index:1}div.output_scroll{height:24em;width:100%;overflow:auto;border-radius:2px;-webkit-box-shadow:inset 0 2px 8px rgba(0,0,0,.8);box-shadow:inset 0 2px 8px rgba(0,0,0,.8);display:block}div.output_collapsed{margin:0;padding:0;display:-webkit-box;-webkit-box-orient:vertical;display:-moz-box;-moz-box-orient:vertical;display:box;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch}div.out_prompt_overlay{height:100%;padding:0 .4em;position:absolute;border-radius:2px}div.out_prompt_overlay:hover{-webkit-box-shadow:inset 0 0 1px #000;box-shadow:inset 0 0 1px #000;background:rgba(240,240,240,.5)}div.output_prompt{color:#8b0000}div.output_area{padding:0;page-break-inside:avoid;display:-webkit-box;-webkit-box-orient:horizontal;display:-moz-box;-moz-box-orient:horizontal;display:box;box-orient:horizontal;box-align:stretch;display:flex;flex-direction:row;align-items:stretch}div.output_area .MathJax_Display{text-align:left!important}div.output_area .rendered_html img,div.output_area .rendered_html table{margin-left:0;margin-right:0}div.output_area img,div.output_area svg{max-width:100%;height:auto}div.output_area img.unconfined,div.output_area svg.unconfined{max-width:none}.output{display:-webkit-box;-webkit-box-orient:vertical;display:-moz-box;-moz-box-orient:vertical;display:box;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch}@media (max-width:540px){div.output_area{-webkit-box-orient:vertical;-moz-box-orient:vertical;box-orient:vertical;box-align:stretch;display:flex;flex-direction:column;align-items:stretch}}div.output_area pre{margin:0;padding:0;border:0;vertical-align:baseline;color:#000;background-color:transparent;border-radius:0}div.output_subarea{overflow-x:auto;padding:.4em;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;flex:1;max-width:calc(100% - 14ex)}div.output_text{text-align:left;color:#000;line-height:1.21429em}div.output_stderr{background:#fdd}div.output_latex{text-align:left}div.output_javascript:empty{padding:0}.js-error{color:#8b0000}div.raw_input_container{font-family:monospace;padding-top:5px}span.raw_input_prompt{}input.raw_input{font-family:inherit;font-size:inherit;color:inherit;width:auto;vertical-align:baseline;padding:0 .25em;margin:0 .25em}input.raw_input:focus{box-shadow:none}p.p-space{margin-bottom:10px}div.output_unrecognized{padding:5px;font-weight:700;color:red}div.output_unrecognized a,div.output_unrecognized a:hover{color:inherit;text-decoration:none}.rendered_html{color:#000}.rendered_html em{font-style:italic}.rendered_html strong{font-weight:700}.rendered_html :link,.rendered_html :visited,.rendered_html u{text-decoration:underline}.rendered_html h1{font-size:185.7%;margin:1.08em 0 0;font-weight:700;line-height:1}.rendered_html h2{font-size:157.1%;margin:1.27em 0 0;font-weight:700;line-height:1}.rendered_html h3{font-size:128.6%;margin:1.55em 0 0;font-weight:700;line-height:1}.rendered_html h4{font-size:100%;margin:2em 0 0;font-weight:700;line-height:1}.rendered_html h5,.rendered_html h6{font-size:100%;margin:2em 0 0;font-weight:700;line-height:1;font-style:italic}.rendered_html h1:first-child{margin-top:.538em}.rendered_html h2:first-child{margin-top:.636em}.rendered_html h3:first-child{margin-top:.777em}.rendered_html h4:first-child,.rendered_html h5:first-child,.rendered_html h6:first-child{margin-top:1em}.rendered_html ul{list-style:disc;margin:0 2em;padding-left:0}.rendered_html ul ul{list-style:square;margin:0 2em}.rendered_html ul ul ul{list-style:circle;margin:0 2em}.rendered_html ol{list-style:decimal;margin:0 2em;padding-left:0}.rendered_html ol ol{list-style:upper-alpha;margin:0 2em}.rendered_html ol ol ol{list-style:lower-alpha;margin:0 2em}.rendered_html ol ol ol ol{list-style:lower-roman;margin:0 2em}.rendered_html ol ol ol ol ol{list-style:decimal;margin:0 2em}.rendered_html *+ol,.rendered_html *+ul{margin-top:1em}.rendered_html hr{color:#000;background-color:#000}.rendered_html pre{margin:1em 2em}.rendered_html code,.rendered_html pre{border:0;background-color:#fff;color:#000;font-size:100%;padding:0}.rendered_html blockquote{margin:1em 2em}.rendered_html table{margin-left:auto;margin-right:auto;border:1px solid #000;border-collapse:collapse}.rendered_html td,.rendered_html th,.rendered_html tr{border:1px solid #000;border-collapse:collapse;margin:1em 2em}.rendered_html td,.rendered_html th{text-align:left;vertical-align:middle;padding:4px}.rendered_html th{font-weight:700}.rendered_html *+table{margin-top:1em}.rendered_html p{text-align:left}.rendered_html *+p{margin-top:1em}.rendered_html img{display:block;margin-left:auto;margin-right:auto}.rendered_html *+img{margin-top:1em}.rendered_html img,.rendered_html svg{max-width:100%;height:auto}.rendered_html img.unconfined,.rendered_html svg.unconfined{max-width:none}div.text_cell{display:-webkit-box;-webkit-box-orient:horizontal;display:-moz-box;-moz-box-orient:horizontal;display:box;box-orient:horizontal;box-align:stretch;display:flex;flex-direction:row;align-items:stretch}@media (max-width:540px){div.text_cell>div.prompt{display:none}}div.text_cell_render{outline:0;resize:none;width:inherit;border-style:none;padding:.5em .5em .5em .4em;color:#000;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}a.anchor-link:link{text-decoration:none;padding:0 20px;visibility:hidden}h1:hover .anchor-link,h2:hover .anchor-link,h3:hover .anchor-link,h4:hover .anchor-link,h5:hover .anchor-link,h6:hover .anchor-link{visibility:visible}.text_cell.rendered .input_area{display:none}.text_cell.rendered .rendered_html{overflow-x:auto}.text_cell.unrendered .text_cell_render{display:none}.cm-header-1,.cm-header-2,.cm-header-3,.cm-header-4,.cm-header-5,.cm-header-6{font-weight:700;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.cm-header-1{font-size:185.7%}.cm-header-2{font-size:157.1%}.cm-header-3{font-size:128.6%}.cm-header-4{font-size:110%}.cm-header-5,.cm-header-6{font-size:100%;font-style:italic}/*!
*
* IPython notebook webapp
*
*/@media (max-width:767px){.notebook_app{padding-left:0;padding-right:0}}#ipython-main-app{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:100%}div#notebook_panel{margin:0;padding:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:100%}#notebook{font-size:14px;line-height:20px;overflow-y:hidden;overflow-x:auto;width:100%;padding-top:20px;margin:0;outline:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;min-height:100%}@media not print{#notebook-container{padding:15px;background-color:#fff;min-height:0;-webkit-box-shadow:0 0 12px 1px rgba(87,87,87,.2);box-shadow:0 0 12px 1px rgba(87,87,87,.2)}}div.ui-widget-content{border:1px solid #ababab;outline:0}pre.dialog{background-color:#f7f7f7;border:1px solid #ddd;border-radius:2px;padding:.4em .4em .4em 2em}p.dialog{padding:.2em}code,kbd,pre,samp{white-space:pre-wrap}#fonttest{font-family:monospace}p{margin-bottom:0}.end_space{min-height:100px;transition:height .2s ease}.notebook_app #header{-webkit-box-shadow:0 0 12px 1px rgba(87,87,87,.2);box-shadow:0 0 12px 1px rgba(87,87,87,.2)}@media not print{.notebook_app{background-color:#eee}}.celltoolbar{border:thin solid #CFCFCF;border-bottom:none;background:#EEE;border-radius:2px 2px 0 0;width:100%;height:29px;padding-right:4px;-webkit-box-orient:horizontal;-moz-box-orient:horizontal;box-orient:horizontal;box-align:stretch;display:flex;flex-direction:row;align-items:stretch;-webkit-box-pack:end;-moz-box-pack:end;box-pack:end;justify-content:flex-end;font-size:87%;padding-top:3px}@media print{.edit_mode div.cell.selected{border-color:transparent}div.code_cell{page-break-inside:avoid}#notebook-container{width:100%}.celltoolbar{display:none}}.ctb_hideshow{display:none;vertical-align:bottom}.ctb_global_show .ctb_show.ctb_hideshow{display:block}.ctb_global_show .ctb_show+.input_area,.ctb_global_show .ctb_show+div.text_cell_input,.ctb_global_show .ctb_show~div.text_cell_render{border-top-right-radius:0;border-top-left-radius:0}.ctb_global_show .ctb_show~div.text_cell_render{border:1px solid #cfcfcf}.celltoolbar select{color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;line-height:1.5;border-radius:1px;width:inherit;font-size:inherit;height:22px;padding:0;display:inline-block}.celltoolbar select:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.celltoolbar select::-moz-placeholder{color:#999;opacity:1}.celltoolbar select:-ms-input-placeholder{color:#999}.celltoolbar select::-webkit-input-placeholder{color:#999}.celltoolbar select[disabled],.celltoolbar select[readonly],fieldset[disabled] .celltoolbar select{background-color:#eee;opacity:1}.celltoolbar select[disabled],fieldset[disabled] .celltoolbar select{cursor:not-allowed}textarea.celltoolbar select{height:auto}select.celltoolbar select{height:30px;line-height:30px}select[multiple].celltoolbar select,textarea.celltoolbar select{height:auto}.celltoolbar label{margin-left:5px;margin-right:5px}.completions{position:absolute;z-index:10;overflow:hidden;border:1px solid #ababab;border-radius:2px;-webkit-box-shadow:0 6px 10px -1px #adadad;box-shadow:0 6px 10px -1px #adadad;line-height:1}.completions select{background:#fff;outline:0;border:none;padding:0;margin:0;overflow:auto;font-family:monospace;font-size:110%;color:#000;width:auto}.completions select option.context{color:#286090}#kernel_logo_widget{float:right!important;float:right}#kernel_logo_widget .current_kernel_logo{display:none;margin-top:-1px;margin-bottom:-1px;width:32px;height:32px}#menubar{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;margin-top:1px}#menubar .navbar{border-top:1px;border-radius:0 0 2px 2px;margin-bottom:0}#menubar .navbar-toggle{float:left;padding-top:7px;padding-bottom:7px;border:none}#menubar .navbar-collapse{clear:left}.nav-wrapper{border-bottom:1px solid #e7e7e7}i.menu-icon{padding-top:4px}ul#help_menu li a{overflow:hidden;padding-right:2.2em}ul#help_menu li a i{margin-right:-1.2em}.dropdown-submenu{position:relative}.dropdown-submenu>.dropdown-menu{top:0;left:100%;margin-top:-6px;margin-left:-1px}.dropdown-submenu:hover>.dropdown-menu{display:block}.dropdown-submenu>a:after{font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:block;content:"\f0da";float:right;color:#333;margin-top:2px;margin-right:-10px}.dropdown-submenu>a:after.pull-left{margin-right:.3em}.dropdown-submenu>a:after.pull-right{margin-left:.3em}.dropdown-submenu:hover>a:after{color:#262626}.dropdown-submenu.pull-left{float:none}.dropdown-submenu.pull-left>.dropdown-menu{left:-100%;margin-left:10px}#notification_area{float:right!important;float:right;z-index:10}.indicator_area{float:right!important;float:right;color:#777;margin-left:5px;margin-right:5px;z-index:10;text-align:center;width:auto}#kernel_indicator{float:right!important;float:right;color:#777;margin-left:5px;margin-right:5px;z-index:10;text-align:center;width:auto;border-left:1px solid}#kernel_indicator .kernel_indicator_name{padding-left:5px;padding-right:5px}#modal_indicator{float:right!important;float:right;color:#777;margin-left:5px;margin-right:5px;z-index:10;text-align:center;width:auto}#readonly-indicator{float:right!important;float:right;color:#777;z-index:10;text-align:center;width:auto;display:none;margin:2px 0 0}.modal_indicator:before{width:1.28571429em;text-align:center}.edit_mode .modal_indicator:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f040"}.edit_mode .modal_indicator:before.pull-left{margin-right:.3em}.edit_mode .modal_indicator:before.pull-right{margin-left:.3em}.command_mode .modal_indicator:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:' '}.command_mode .modal_indicator:before.pull-left{margin-right:.3em}.command_mode .modal_indicator:before.pull-right{margin-left:.3em}.kernel_idle_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f10c"}.kernel_idle_icon:before.pull-left{margin-right:.3em}.kernel_idle_icon:before.pull-right{margin-left:.3em}.kernel_busy_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f111"}.kernel_busy_icon:before.pull-left{margin-right:.3em}.kernel_busy_icon:before.pull-right{margin-left:.3em}.kernel_dead_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f1e2"}.kernel_dead_icon:before.pull-left{margin-right:.3em}.kernel_dead_icon:before.pull-right{margin-left:.3em}.kernel_disconnected_icon:before{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\f127"}.kernel_disconnected_icon:before.pull-left{margin-right:.3em}.kernel_disconnected_icon:before.pull-right{margin-left:.3em}.notification_widget{z-index:10;background:rgba(240,240,240,.5);margin-right:4px;color:#333;background-color:#fff;border-color:#ccc}.notification_widget.active,.notification_widget.focus,.notification_widget:active,.notification_widget:focus,.notification_widget:hover,.open>.dropdown-toggle.notification_widget{color:#333;background-color:#e6e6e6;border-color:#adadad}.notification_widget.active,.notification_widget:active,.open>.dropdown-toggle.notification_widget{background-image:none}.notification_widget.disabled,.notification_widget.disabled.active,.notification_widget.disabled.focus,.notification_widget.disabled:active,.notification_widget.disabled:focus,.notification_widget.disabled:hover,.notification_widget[disabled],.notification_widget[disabled].active,.notification_widget[disabled].focus,.notification_widget[disabled]:active,.notification_widget[disabled]:focus,.notification_widget[disabled]:hover,fieldset[disabled] .notification_widget,fieldset[disabled] .notification_widget.active,fieldset[disabled] .notification_widget.focus,fieldset[disabled] .notification_widget:active,fieldset[disabled] .notification_widget:focus,fieldset[disabled] .notification_widget:hover{background-color:#fff;border-color:#ccc}.notification_widget .badge{color:#fff;background-color:#333}.notification_widget.warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.notification_widget.warning.active,.notification_widget.warning.focus,.notification_widget.warning:active,.notification_widget.warning:focus,.notification_widget.warning:hover,.open>.dropdown-toggle.notification_widget.warning{color:#fff;background-color:#ec971f;border-color:#d58512}.notification_widget.warning.active,.notification_widget.warning:active,.open>.dropdown-toggle.notification_widget.warning{background-image:none}.notification_widget.warning.disabled,.notification_widget.warning.disabled.active,.notification_widget.warning.disabled.focus,.notification_widget.warning.disabled:active,.notification_widget.warning.disabled:focus,.notification_widget.warning.disabled:hover,.notification_widget.warning[disabled],.notification_widget.warning[disabled].active,.notification_widget.warning[disabled].focus,.notification_widget.warning[disabled]:active,.notification_widget.warning[disabled]:focus,.notification_widget.warning[disabled]:hover,fieldset[disabled] .notification_widget.warning,fieldset[disabled] .notification_widget.warning.active,fieldset[disabled] .notification_widget.warning.focus,fieldset[disabled] .notification_widget.warning:active,fieldset[disabled] .notification_widget.warning:focus,fieldset[disabled] .notification_widget.warning:hover{background-color:#f0ad4e;border-color:#eea236}.notification_widget.warning .badge{color:#f0ad4e;background-color:#fff}.notification_widget.success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.notification_widget.success.active,.notification_widget.success.focus,.notification_widget.success:active,.notification_widget.success:focus,.notification_widget.success:hover,.open>.dropdown-toggle.notification_widget.success{color:#fff;background-color:#449d44;border-color:#398439}.notification_widget.success.active,.notification_widget.success:active,.open>.dropdown-toggle.notification_widget.success{background-image:none}.notification_widget.success.disabled,.notification_widget.success.disabled.active,.notification_widget.success.disabled.focus,.notification_widget.success.disabled:active,.notification_widget.success.disabled:focus,.notification_widget.success.disabled:hover,.notification_widget.success[disabled],.notification_widget.success[disabled].active,.notification_widget.success[disabled].focus,.notification_widget.success[disabled]:active,.notification_widget.success[disabled]:focus,.notification_widget.success[disabled]:hover,fieldset[disabled] .notification_widget.success,fieldset[disabled] .notification_widget.success.active,fieldset[disabled] .notification_widget.success.focus,fieldset[disabled] .notification_widget.success:active,fieldset[disabled] .notification_widget.success:focus,fieldset[disabled] .notification_widget.success:hover{background-color:#5cb85c;border-color:#4cae4c}.notification_widget.success .badge{color:#5cb85c;background-color:#fff}.notification_widget.info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.notification_widget.info.active,.notification_widget.info.focus,.notification_widget.info:active,.notification_widget.info:focus,.notification_widget.info:hover,.open>.dropdown-toggle.notification_widget.info{color:#fff;background-color:#31b0d5;border-color:#269abc}.notification_widget.info.active,.notification_widget.info:active,.open>.dropdown-toggle.notification_widget.info{background-image:none}.notification_widget.info.disabled,.notification_widget.info.disabled.active,.notification_widget.info.disabled.focus,.notification_widget.info.disabled:active,.notification_widget.info.disabled:focus,.notification_widget.info.disabled:hover,.notification_widget.info[disabled],.notification_widget.info[disabled].active,.notification_widget.info[disabled].focus,.notification_widget.info[disabled]:active,.notification_widget.info[disabled]:focus,.notification_widget.info[disabled]:hover,fieldset[disabled] .notification_widget.info,fieldset[disabled] .notification_widget.info.active,fieldset[disabled] .notification_widget.info.focus,fieldset[disabled] .notification_widget.info:active,fieldset[disabled] .notification_widget.info:focus,fieldset[disabled] .notification_widget.info:hover{background-color:#5bc0de;border-color:#46b8da}.notification_widget.info .badge{color:#5bc0de;background-color:#fff}.notification_widget.danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.notification_widget.danger.active,.notification_widget.danger.focus,.notification_widget.danger:active,.notification_widget.danger:focus,.notification_widget.danger:hover,.open>.dropdown-toggle.notification_widget.danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.notification_widget.danger.active,.notification_widget.danger:active,.open>.dropdown-toggle.notification_widget.danger{background-image:none}.notification_widget.danger.disabled,.notification_widget.danger.disabled.active,.notification_widget.danger.disabled.focus,.notification_widget.danger.disabled:active,.notification_widget.danger.disabled:focus,.notification_widget.danger.disabled:hover,.notification_widget.danger[disabled],.notification_widget.danger[disabled].active,.notification_widget.danger[disabled].focus,.notification_widget.danger[disabled]:active,.notification_widget.danger[disabled]:focus,.notification_widget.danger[disabled]:hover,fieldset[disabled] .notification_widget.danger,fieldset[disabled] .notification_widget.danger.active,fieldset[disabled] .notification_widget.danger.focus,fieldset[disabled] .notification_widget.danger:active,fieldset[disabled] .notification_widget.danger:focus,fieldset[disabled] .notification_widget.danger:hover{background-color:#d9534f;border-color:#d43f3a}.notification_widget.danger .badge{color:#d9534f;background-color:#fff}div#pager{background-color:#fff;font-size:14px;line-height:20px;overflow:hidden;display:none;position:fixed;bottom:0;width:100%;max-height:50%;padding-top:8px;-webkit-box-shadow:0 0 12px 1px rgba(87,87,87,.2);box-shadow:0 0 12px 1px rgba(87,87,87,.2);z-index:100;top:auto!important}div#pager pre{line-height:1.21429em;color:#000;background-color:#f7f7f7;padding:.4em}div#pager #pager-button-area{position:absolute;top:8px;right:20px}div#pager #pager-contents{position:relative;overflow:auto;width:100%;height:100%}div#pager #pager-contents #pager-container{position:relative;padding:15px 0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}div#pager .ui-resizable-handle{top:0;height:8px;background:#f7f7f7;border-top:1px solid #cfcfcf;border-bottom:1px solid #cfcfcf}div#pager .ui-resizable-handle::after{content:'';top:2px;left:50%;height:3px;width:30px;margin-left:-15px;position:absolute;border-top:1px solid #cfcfcf}.quickhelp{display:-webkit-box;-webkit-box-orient:horizontal;display:-moz-box;-moz-box-orient:horizontal;display:box;box-orient:horizontal;box-align:stretch;display:flex;flex-direction:row;align-items:stretch}.shortcut_key{display:inline-block;width:20ex;text-align:right;font-family:monospace}.shortcut_descr{display:inline-block;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;flex:1}span.save_widget{margin-top:6px}span.save_widget span.filename{height:1em;line-height:1em;padding:3px;margin-left:16px;border:none;font-size:146.5%;border-radius:2px}span.save_widget span.filename:hover{background-color:#e6e6e6}span.autosave_status,span.checkpoint_status{font-size:small}@media (max-width:767px){span.save_widget{font-size:small}span.autosave_status,span.checkpoint_status{display:none}}@media (min-width:768px)and (max-width:991px){span.checkpoint_status{display:none}span.autosave_status{font-size:x-small}}.toolbar{padding:0;margin-left:-5px;margin-top:2px;margin-bottom:5px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.toolbar label,.toolbar select{width:auto;vertical-align:middle;margin-bottom:0;display:inline;font-size:92%;margin-left:.3em;margin-right:.3em;padding:3px 0 0}.toolbar .btn{padding:2px 8px}.toolbar .btn-group{margin-top:0;margin-left:5px}#maintoolbar{margin-bottom:-3px;margin-top:-8px;border:0;min-height:27px;margin-left:0;padding-top:11px;padding-bottom:3px}#maintoolbar .navbar-text{float:none;vertical-align:middle;text-align:right;margin-left:5px;margin-right:0;margin-top:0}.select-xs{height:24px}@-moz-keyframes fadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}.bigtooltip{overflow:auto;height:200px;-webkit-transition-property:height;-webkit-transition-duration:500ms;-moz-transition-property:height;-moz-transition-duration:500ms;transition-property:height;transition-duration:500ms}.smalltooltip{-webkit-transition-property:height;-webkit-transition-duration:500ms;-moz-transition-property:height;-moz-transition-duration:500ms;transition-property:height;transition-duration:500ms;text-overflow:ellipsis;overflow:hidden;height:80px}.tooltipbuttons{position:absolute;padding-right:15px;top:0;right:0}.tooltiptext{padding-right:30px}.ipython_tooltip{max-width:700px;animation:fadeOut 400ms;-webkit-animation:fadeIn 400ms;-moz-animation:fadeIn 400ms;animation:fadeIn 400ms;vertical-align:middle;background-color:#f7f7f7;overflow:visible;border:1px solid #ababab;outline:0;padding:3px 3px 3px 7px;padding-left:7px;font-family:monospace;min-height:50px;-moz-box-shadow:0 6px 10px -1px #adadad;-webkit-box-shadow:0 6px 10px -1px #adadad;box-shadow:0 6px 10px -1px #adadad;border-radius:2px;position:absolute;z-index:1000}.ipython_tooltip a{float:right}.ipython_tooltip .tooltiptext pre{border:0;border-radius:0;font-size:100%;background-color:#f7f7f7}.pretooltiparrow{left:0;margin:0;top:-16px;width:40px;height:16px;overflow:hidden;position:absolute}.pretooltiparrow:before{background-color:#f7f7f7;border:1px solid #ababab;z-index:11;content:"";position:absolute;left:15px;top:10px;width:25px;height:25px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg)}.terminal-app{background:#eee}.terminal-app #header{background:#fff;-webkit-box-shadow:0 0 12px 1px rgba(87,87,87,.2);box-shadow:0 0 12px 1px rgba(87,87,87,.2)}.terminal-app .terminal{float:left;font-family:monospace;color:#fff;background:#000;padding:.4em;border-radius:2px;-webkit-box-shadow:0 0 12px 1px rgba(87,87,87,.4);box-shadow:0 0 12px 1px rgba(87,87,87,.4)}.terminal-app .terminal,.terminal-app .terminal dummy-screen{line-height:1em;font-size:14px}.terminal-app .terminal-cursor{color:#000;background:#fff}.terminal-app #terminado-container{margin-top:20px}
/*# sourceMappingURL=style.min.css.map */
    </style>
<style type="text/css">
    .highlight .hll { background-color: #ffffcc }
.highlight  { background: #f8f8f8; }
.highlight .c { color: #408080; font-style: italic } /* Comment */
.highlight .err { border: 1px solid #FF0000 } /* Error */
.highlight .k { color: #008000; font-weight: bold } /* Keyword */
.highlight .o { color: #666666 } /* Operator */
.highlight .ch { color: #408080; font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: #408080; font-style: italic } /* Comment.Multiline */
.highlight .cp { color: #BC7A00 } /* Comment.Preproc */
.highlight .cpf { color: #408080; font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: #408080; font-style: italic } /* Comment.Single */
.highlight .cs { color: #408080; font-style: italic } /* Comment.Special */
.highlight .gd { color: #A00000 } /* Generic.Deleted */
.highlight .ge { font-style: italic } /* Generic.Emph */
.highlight .gr { color: #FF0000 } /* Generic.Error */
.highlight .gh { color: #000080; font-weight: bold } /* Generic.Heading */
.highlight .gi { color: #00A000 } /* Generic.Inserted */
.highlight .go { color: #888888 } /* Generic.Output */
.highlight .gp { color: #000080; font-weight: bold } /* Generic.Prompt */
.highlight .gs { font-weight: bold } /* Generic.Strong */
.highlight .gu { color: #800080; font-weight: bold } /* Generic.Subheading */
.highlight .gt { color: #0044DD } /* Generic.Traceback */
.highlight .kc { color: #008000; font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: #008000; font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: #008000; font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: #008000 } /* Keyword.Pseudo */
.highlight .kr { color: #008000; font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: #B00040 } /* Keyword.Type */
.highlight .m { color: #666666 } /* Literal.Number */
.highlight .s { color: #BA2121 } /* Literal.String */
.highlight .na { color: #7D9029 } /* Name.Attribute */
.highlight .nb { color: #008000 } /* Name.Builtin */
.highlight .nc { color: #0000FF; font-weight: bold } /* Name.Class */
.highlight .no { color: #880000 } /* Name.Constant */
.highlight .nd { color: #AA22FF } /* Name.Decorator */
.highlight .ni { color: #999999; font-weight: bold } /* Name.Entity */
.highlight .ne { color: #D2413A; font-weight: bold } /* Name.Exception */
.highlight .nf { color: #0000FF } /* Name.Function */
.highlight .nl { color: #A0A000 } /* Name.Label */
.highlight .nn { color: #0000FF; font-weight: bold } /* Name.Namespace */
.highlight .nt { color: #008000; font-weight: bold } /* Name.Tag */
.highlight .nv { color: #19177C } /* Name.Variable */
.highlight .ow { color: #AA22FF; font-weight: bold } /* Operator.Word */
.highlight .w { color: #bbbbbb } /* Text.Whitespace */
.highlight .mb { color: #666666 } /* Literal.Number.Bin */
.highlight .mf { color: #666666 } /* Literal.Number.Float */
.highlight .mh { color: #666666 } /* Literal.Number.Hex */
.highlight .mi { color: #666666 } /* Literal.Number.Integer */
.highlight .mo { color: #666666 } /* Literal.Number.Oct */
.highlight .sb { color: #BA2121 } /* Literal.String.Backtick */
.highlight .sc { color: #BA2121 } /* Literal.String.Char */
.highlight .sd { color: #BA2121; font-style: italic } /* Literal.String.Doc */
.highlight .s2 { color: #BA2121 } /* Literal.String.Double */
.highlight .se { color: #BB6622; font-weight: bold } /* Literal.String.Escape */
.highlight .sh { color: #BA2121 } /* Literal.String.Heredoc */
.highlight .si { color: #BB6688; font-weight: bold } /* Literal.String.Interpol */
.highlight .sx { color: #008000 } /* Literal.String.Other */
.highlight .sr { color: #BB6688 } /* Literal.String.Regex */
.highlight .s1 { color: #BA2121 } /* Literal.String.Single */
.highlight .ss { color: #19177C } /* Literal.String.Symbol */
.highlight .bp { color: #008000 } /* Name.Builtin.Pseudo */
.highlight .vc { color: #19177C } /* Name.Variable.Class */
.highlight .vg { color: #19177C } /* Name.Variable.Global */
.highlight .vi { color: #19177C } /* Name.Variable.Instance */
.highlight .il { color: #666666 } /* Literal.Number.Integer.Long */
    </style>


<style type="text/css">
/* Overrides of notebook CSS for static HTML export */
body {
  overflow: visible;
  padding: 8px;
}

div#notebook {
  overflow: visible;
  border-top: none;
}

@media print {
  div.cell {
    display: block;
    page-break-inside: avoid;
  } 
  div.output_wrapper { 
    display: block;
    page-break-inside: avoid; 
  }
  div.output { 
    display: block;
    page-break-inside: avoid; 
  }
}
</style>

<!-- Custom stylesheet, it must be in the same directory as the html file -->
<link rel="stylesheet" href="custom.css">

<!-- Loading mathjax macro -->
<!-- Load mathjax -->
    <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
    <!-- MathJax configuration -->
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            processEscapes: true,
            processEnvironments: true
        },
        // Center justify equations in code and markdown cells. Elsewhere
        // we use CSS to left justify single line equations in code cells.
        displayAlign: 'center',
        "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 0}},
            linebreaks: { automatic: true }
        }
    });
    </script>
    <!-- End of mathjax configuration --></head>
<body>
  <div tabindex="-1" id="notebook" class="border-box-sizing">
    <div class="container" id="notebook-container">

<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Rapport-de-Business-Intelligence,">Rapport de Business Intelligence,<a class="anchor-link" href="#Rapport-de-Business-Intelligence,">&#182;</a></h1><h3 id="Massyl-Gheroufella-et-Emmanuel-de-B&#233;zenac,">Massyl Gheroufella et Emmanuel de B&#233;zenac,<a class="anchor-link" href="#Massyl-Gheroufella-et-Emmanuel-de-B&#233;zenac,">&#182;</a></h3><h2 id="master-DAC,-UPMC">master DAC, UPMC<a class="anchor-link" href="#master-DAC,-UPMC">&#182;</a></h2><h4 id="Probl&#233;matique:">Probl&#233;matique:<a class="anchor-link" href="#Probl&#233;matique:">&#182;</a></h4><p>Nous avons décidés de nous concentrer sur les données des restaurants en France, plus particulièrement à Paris et à Avignon, et de les exploiter afin de présenter des rapports et charts du suivi de qualité des restaurants, ainsi que la disponibilité d'une terrasse ou un étalage.</p>
<p>Nous avons fait 3 schémas en étoile, en récupérant les données à l'aide de plusieures méthodes différentes: en téléchargent des données accessibles depuis <a href="https://www.opendata.paris.fr">https://www.opendata.paris.fr</a> et <a href="https://www.data.gouv.fr">https://www.data.gouv.fr</a>, et faisant du webscraping depuis le site <a href="https://www.yelp.fr">https://www.yelp.fr</a> et <a href="https://www.bilansgratuits.fr">https://www.bilansgratuits.fr</a>.</p>
<p>Voici un compte rendu récapitulant le travail fait à ce jour.</p>
<h1 id="Aper&#231;us-des-sch&#233;mas:-1&#232;re-partie">Aper&#231;us des sch&#233;mas: 1&#232;re partie<a class="anchor-link" href="#Aper&#231;us-des-sch&#233;mas:-1&#232;re-partie">&#182;</a></h1><h2 id="Sch&#233;ma-1:-Restaurants-&#224;-Paris-ayant-une-terrasse-ou-un-&#233;talage.">Sch&#233;ma 1: Restaurants &#224; Paris ayant une terrasse ou un &#233;talage.<a class="anchor-link" href="#Sch&#233;ma-1:-Restaurants-&#224;-Paris-ayant-une-terrasse-ou-un-&#233;talage.">&#182;</a></h2><p>Le fichier de base à été téléchargé depuis le lien suivant:
<a href="http://opendata.paris.fr/explore/dataset/etalages_et_terrasses_autorisees_a_paris/">http://opendata.paris.fr/explore/dataset/etalages_et_terrasses_autorisees_a_paris/</a></p>
<h3 id="Preprocessing">Preprocessing<a class="anchor-link" href="#Preprocessing">&#182;</a></h3><p>Il a fallu faire une sélection afin d'extraire uniquement les n-uplets traitant de restaurants, snacks, ou pizzerias. Nous avons aussi fait une projection pour éliminer les colonnes intractables pour notre étude. Notre <strong>mesure</strong> est la surface, calculée à partir de la longueur et la largeur de la terrasse donnée dans le fichier csv initial, et nos <strong>dimensions</strong> sont constitués à partir des éléments des colonnes restantes (voir ci-dessous).</p>
<h3 id="aper&#231;u-schema_etal_rest.csv">aper&#231;u schema_etal_rest.csv<a class="anchor-link" href="#aper&#231;u-schema_etal_rest.csv">&#182;</a></h3><p>Ce fichier final comporte 8580 restaurants:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython2"><pre><span class="kn">import</span> <span class="nn">pandas</span> <span class="kn">as</span> <span class="nn">pd</span>
<span class="n">df1</span><span class="o">=</span><span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="s1">&#39;data/schema_etal_rest.csv&#39;</span><span class="p">,</span><span class="n">sep</span><span class="o">=</span><span class="s1">&#39;;&#39;</span><span class="p">)</span>
<span class="n">df1</span><span class="p">[[</span><span class="s1">&#39;surface&#39;</span><span class="p">,</span><span class="s1">&#39;arrondissement&#39;</span><span class="p">,</span> <span class="s1">&#39;adresse&#39;</span><span class="p">,</span> <span class="s1">&#39;lieu&#39;</span><span class="p">,</span> <span class="s1">&#39;libelle_type_objet&#39;</span><span class="p">,</span> <span class="s1">&#39;Coordonnées&#39;</span><span class="p">,</span> <span class="s1">&#39;libelle&#39;</span><span class="p">,</span> <span class="s1">&#39;nom&#39;</span><span class="p">]]</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[2]:</div>

<div class="output_html rendered_html output_subarea output_execute_result">
<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>surface</th>
      <th>arrondissement</th>
      <th>adresse</th>
      <th>lieu</th>
      <th>libelle_type_objet</th>
      <th>Coordonnées</th>
      <th>libelle</th>
      <th>nom</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>11.3742</td>
      <td>75020</td>
      <td>Pan coupé 125 AVENUE GAMBETTA / 120 RUE ORFILA</td>
      <td>A</td>
      <td>TERRASSE OUVERTE</td>
      <td>48.868115, 2.40109</td>
      <td>RESTAURANT</td>
      <td>SARL LA POINTE AUX PIMENTS</td>
    </tr>
    <tr>
      <th>1</th>
      <td>15.6650</td>
      <td>75020</td>
      <td>202 RUE DES PYRENEES</td>
      <td>B</td>
      <td>TERRASSE FERMEE</td>
      <td>48.864386, 2.39905</td>
      <td>RESTAURANT</td>
      <td>SNC INDIANA GAMBETTA</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.9200</td>
      <td>75020</td>
      <td>7 PLACE GAMBETTA</td>
      <td>A</td>
      <td>TERRASSE OUVERTE</td>
      <td>48.864778, 2.397904</td>
      <td>RESTAURATION RAPIDE - SNACK</td>
      <td>SA MC DONALD S FRANCE</td>
    </tr>
    <tr>
      <th>3</th>
      <td>10.1400</td>
      <td>75020</td>
      <td>4 PLACE MARTIN NADAUD</td>
      <td>A</td>
      <td>TERRASSE FERMEE</td>
      <td>48.865145, 2.394757</td>
      <td>BAR RESTAURANT</td>
      <td>SARL MATI NADAUD</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4.9800</td>
      <td>75020</td>
      <td>28 BOULEVARD DE MENILMONTANT</td>
      <td>A</td>
      <td>TERRASSE OUVERTE</td>
      <td>48.859491, 2.389397</td>
      <td>BAR RESTAURANT</td>
      <td>SARL OBODODO</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="aper&#231;u-du-cube-OLAP-sous-Pentaho-Server">aper&#231;u du cube OLAP sous Pentaho Server<a class="anchor-link" href="#aper&#231;u-du-cube-OLAP-sous-Pentaho-Server">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython2"><pre><span class="kn">from</span> <span class="nn">IPython.core.display</span> <span class="kn">import</span> <span class="n">Image</span> 
<span class="n">Image</span><span class="p">(</span><span class="n">filename</span><span class="o">=</span><span class="s1">&#39;Capture1.png&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[4]:</div>


<div class="output_png output_subarea output_execute_result">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAk0AAAFLCAYAAADLS7jYAAAAAXNSR0IArs4c6QAAAARnQU1BAACx
jwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAHJTSURBVHhe7Z3Zj9TKs+eZke7/MNL8By31C/9J
v/Qr/wEv/YBoae79CYRaIyHx0k9ILYQEAjG6DTSHnT5sh327zXo47PvOsI4ACXL8zXK4wlmRdlV3
psvGEdJHZacznOmMqHA47XItu3DvpYkJRCqPzTDbLRNJLzba7u9LvyLpxmYY7Q6jTTDMdstE0ovN
MNvtRyTdmKj8HrIs/VRRUVFRUVFRUSkQmzT961//UhRFURRFURiuZEmTioqKioqKiopKR0qTpv/6
r/9SFEVRFKXFQO7du9dqIJo0KYqiKIpSCERKJNoERJMmRVEURVEKgUiJRJuAaNKkKIqiKEohECmR
aBMQTZoURVEURSkEIiUSbQKiSZOiKIqiKIVApESiTUA0aVIURVEUpRCIlEj0MD9pRpctM8vGZ3Ll
M+NJ2eikmWdlTQOiSZOiKIqiKIVApESiByRNo+NmfHTUTM7zstEETZoURVEURfnNgUiJRA82QZo0
M5NJkjQ5b8swyzQ+2Sm3SRPNRlm6ydV8otMpS2el0n1liRatp5+TmL1aNm5mBtkn7WsRQDRpUhRF
URSlEIiUSPSQJTozZhwJjZPoZOVufZv0dMtnxpmuWDdJxGbS8kH2SXUWAUSTJkVRFEVRCoFIiUQP
LNGxzzFRcuMkPNnsjwXJDBIfWu7dV25dKu93n0sAokmToiiKoiiFQKREogee0NhkJk1YfAlPDyzR
cev69jHIPsXt/QHRpElRFEVRlEIgUiLRgy+Byco7CUz31lp3+3j6DNS9e/NmEg+SzyQ6LNGxzydJ
SdMg+6SH0xcBRJMmRVEURVEKgUiJRA+lSVO6bGd+UlgyRWX0EDl/kHt0fLyzD6mNAfa5WCCaNCmK
oiiKUghESiTaBESTJkVRFEVRCoFIiUSbgGjSpCiKoihKIRApkWgTEE2aFEVRFEUpBCIlEm0CokmT
oiiKoiiFQKREok1ASpMmFRUVFRUVFRWVPpImKdtSlMWg/qSERP2p2aj9mgVEmoFqExBNmpTKUH9S
QqL+1GzUfs0CIiUSbQKiSZNSGepPSkjUn5qN2q9ZQCh5uHDv5ZLgiUiTgGjSpFSG+pMSEvWnZqP2
axYQSh6Wkvho0qQofaL+pIRE/anZqP2aBYSSB02a8qJJkxKFKP7k+58j5bcniD8N6j9UX/1uyQSx
n1IZEEoeNGnKy4BJE/45mP1JXsA/x1N+L/rzJ07qW0UnJz15tZa+/UnykcUmP4vVU3oYyH7u+UTH
v3IglDwUJT7Xrl0zx44ds2DZ3a5JE0cdWSlgcf40bsZHR83kvLA9q6M+10b69qciHxnUf6i++t2S
Gcx+ThzQ8a8cCCUPUuKzsLBgTp48af7jP/7D/I//8T8sWEYZtlE9TZo4PY7cmSkYn6H1GTO+LHH8
GfoSdGelsjrYR1q2DHV9J0ulcQzqT/OTo/bqcmZcuMrMfCSBncQmk7rLlo2bmZ56XV/CfnO6njL1
xXrTtz+lvpE7wVKZ/eSxyDkxu/bP6amfLIWB7TczbpaNz+TLkuXcdzdnp65dx2e6d0T0XLM4IJQ8
+BKf//W//pf5t3/7N/Pf//t/t2AZZbyOJk0c5shZGXd0WrbOypwU5fZEh6QqPeEBaX9KYxnMnxDk
Uh+Bf2R+AB9xAh+2pQEwn6ALvmTrdctnxpNlqUx9sfb07U+S7XL+0I1F9gRs6xb4D/9UP1k0i7Ef
LqDsd9w3ztI5xp5f3FiidhsUCCUPUuKD23H/83/+T5so/bf/9t8sWEYZtlE9TZo4ouN1ndPv8KiT
ODVmoLLMn2COrTSagfwp5yOpfyDoub5D61K56EvYl+tXQplXn3SUYdO3P7m+wctEv0ns7LO/q+er
x9tSRBZlP3f8qYyPv7Rd0uc6FrVbERBKHhqRNE2PZbYdmxa2LwJIBUkTJUvd5Km3HkuaBH3l92AQ
f8pPuXewt+hc3+FBUCqn9R5KkqdSfWXY9O1Pki2L/KbI/q6er55SymLth9gwPsnGny6oeF2uIy3z
MqUvIJQ8+BKfYLfn5ibMCIv9IxNzcj0v02Zs2YiZmJO2LR5IJUmTLU8OPHsuxa2XmzLlt1iU34n+
/cl9Fi4h5yPdIJndTunxPY8vJfXGs+ej0luASbLeUzavvlh3+vYnKS5RmbPN+pN9nMDvP3k99ZPF
snj7dcZc+t6L8UBcVrsNCoSSBynxCfcguJvwJOtj02x7H9ika8xMS9uWAKSapIk/n0L14PQZ7Grf
3SbuT2kiffuT6EcIcqkP2WcUOv4xOj7eqSvpiL6UBtyUTiIvlfn02f6VoTKQP3E78pmkIhtL27ge
1S3ah+JlIPu5Y5pdRHXuZNDYi/GgaFnt1jcQSh6KEp+lv3IASZOQ8CARGpkwc+56+jkxBjtCD/rM
rsm26YmR7rqbkLG69jZebpYrP1sFCZs0+WAObtelL4Hy2xPMnxQlQf2p2aj9mgWEkoe+brF56Ed3
2iZACXyGqShpooTHV5eDZ53sfufMxIj7vJOTsDn7gVSSNGUPgFOZJk2tJJQ/KQpQf2o2ar9mAaHk
InbSlEEPcyPJKUqa3ARJqpvNHiUU6fF6lm4SBalmpklREtSflJCoPzUbtV+zgFByUVnSZElnf6RE
qCj5oTKbCLHbbP3qCUA0aVIqQ/1JCYn6U7NR+zULCCUPUZMmJC7SbTl8slmfOTyn1E/y42zP9Ly3
5/yvKIBo0qRUhvqTEhL1p2aj9msWEEoekPgsBZ6I9NJJZrq3x7qzRDbhSctHxsa6yVRR0pSQPSPF
9aheWg56HwRPYPuBaNKkVIb6kxIS9admo/ZrFpAsKWkpEE2alMpQf1JCov7UbNR+zQIiJRJtAqJJ
k1IZ6k9KSNSfmo3ar1lApESiTUA0aVIqQ/1JCYn6U7NR+zULiJRItAmIJk1KZag/KSFRf2o2ar9m
AZESiTYBKU2aVFRUVFRUVFRU+kiapGxLURaD+pMSEvWnZqP2axaQr1+/thpI30mT9K6FpcINovz+
qD8pIYntT4C3p4RF7dcsIFIi0SYgAyVNfACXijp0+1B/UkIS05+A+lRc1H7NAiIlEm0CokmTUhnq
T0pIYvoTUJ+Ki9qvWUCkRKJNQDRpUipD/UkJSUx/AupTcVH7NQuIlEi0CYgmTUplqD8pIYnpT0B9
Ki5qv2YBkRKJNgHRpEmpDPUnJSQx/QmoT8UltP2uXLmSW1f7hQUiJRJtArKkpAlOevLkSXP06FEz
Pz9vDh8+bJePHTtmjhw5YsuwfObMmR5ddej2of6khCSmPwH1qbiU2Q9cunQpsyHsB5thmdbxCftd
vHjR1ueJk9ovLBApkWgTkCUlTWfPnjX79u0z165dM5cvXzbnz583N27cMFevXjXnzp2zDrywsGDL
jx8/buuQrjp0++jHn/bu3Wv9Cb4Dv7l586ZdV39SXGL6E1CfikuZ/cCff/5pk6br169bO6EMNkQy
hXWcawCSKZTBpqSr9gsLREok2gRkSUkTMnw4dZngFez79++3QYx01aHbB4SWff6EK38uv379snBR
f1IAhJZD+xNQn4oLhJZ9Yw373bp1y9Ylce339u1bWw+zTlxX7RcWiJRItAnIkmeaMEX67ds367if
Pn3KeP/+vfm///f/2m2YfdqxY4e9uiNddej2UeZPp0+fNrOzs+bnz5/m3bt35vv373YG4ODBg3aZ
ytSfFBDTn4D6VFzK7AdwGxV2RKL05s0b8+XLF7N582a7DPvh/PL06VN7x+PEiRM5XbVfWCBSItEm
IEtKmnhQQpL0//7f/7N8/vzZJk4fP360Tv3333+bPXv2ZNOrQB26fZT5E91Ogc8gIELm5ubMli1b
7DL8CX6F6Xn1JwVCy6H9CahPxQVCy76xxuwR7PLjxw97jkGSu27dOnuRjmWcax4/fmzr/fXXXzld
tV9YIFIiMTxmzYply8wyywozK9b5ahamlqd1GCtmc3VmVyRly6fMAiuz+3fKIEtKmjD9jas2BB4E
nTVr1pj//b//t1m/fr3593//d/N//s//sc599+5dG6j0dkq7KfMnmrn88OGD2b17t5mamjKrV682
q1atsr6F2QD4E55v2LlzpyZNLSemPwH1qbiU2Q/gthueU3r9+rXZuHGjTZhWrlxp1q5dazZs2GAe
PnxoHj16ZA4dOqRJU2Qg3YRi2CyYqeXLzIrZdH12hZD0yCBBWj61kF9fscIsZ/pZohU6aUJQwrQo
Ag8clwNnxhXAy5cv7cOWu3bt0pNcyynzJ8xc4kSGK8oHDx7Yz23btplNmzZlZfAnzAxs3bpVk/CW
E9OfgPpUXMrsB3B7DokTEt/79++bZ8+e2YT3zp079jzz/Plze67BRbs+0xQXCCUPwwezTHx2yV33
sDBllrN6SI5sAoVyN+kSyiBLSpoQlDCbhPvLcOYXL17kgEOjHM8M/PHHH5o0tZwyf8IzJQcOHDCv
Xr0yT548sVPvSLa3b99uHRZl8CnUxW0W9ad2E9OfgPpUXMrsB/AMGuyCC3M8u4RzDe5k4IKczjG3
b9+2v547depUTlftFxYIJQ/DB0nScjO1QOuYeeLrMnyWKUuYsK2qpAlXZrgSwM6QHOGqjQOHxhUC
ruj+8z//U2cGWk6ZP+F2L6bZyZ8QFPGJYEk+hVvBuN2LK0t9ELzdxPQnoD4VlzL7Abo9x88xSHYp
YcL5BZ+oh1cTcF21X1ggsENtsLNG7DmlspkmW5/qdG7vdXVTeJIUK2nCbBMcGFOnmC5FgkS35/BT
Xlzl4SoAzxT0PTMwN2FGRiaSq7/0U6qjNI5+/AknOvInusWLIAm/wjKebcDPw/Es3YULFzLd2vnT
7+i7NTummP4EovjUYuvHHvsh9KvMfgDJEJ45gw1hM9gQyRMtw36UHONcxHVrFxMaDiRLQOqGNFPk
4D7LlEPSj5E04WVwuI+MaVEEHfxSBT/7RBDCtDiWMR2OhyxRT37x2JyZGEkyPO64XodO67rZYcLI
xFxaJzZ16EMzGcSf4D94Xg4zmYBObHiwF7MC+Fy6P7FtvCwERW32A9eL1cccwri5VNKP/onpTyCo
TxXVL2KxehI161eZ/WAPvOkbtsEFN9kJwIY43+ATCRMe/4C9g8UEN54v4TiXTE36A8kSilrRmTXq
JkTuekJulkmgqqSJwLQ2EiRcFSBA4T40wDLK6BX3nGx/1vhjZmxkxEzMpdvJIYocYwhO00Md+tAg
FutP5EcowzLe/OvqLNqfYtlwqfuN1S8ftj1n3MQ6FfaphJj+BKL41KBjWNTOoNSsX2X2owQI5w/M
ApLNMKOEW3FYxy/mYD96m7uYNNk+Dmo/T31erypq0h9IllDUAfxiLp2wyM8gSc87FcwyASdBcl9T
QL/SgwRJmvrBdxU3NzFiM+jpMZZJk0MUOUbPts7VxNg0rU+bsWWJk02Tw3UHIKuDfWQD03VI9Inq
DnblPYQ+NIiQ/uSyaH+Syqg8s8uYmc62waZU3rFjzlZkQ6FNyaaiLl0Zp+UjY2PdPkr9StuYSI6Z
dMi/+vUjcdxArr10H7n2WB+yesV+LPZpAH3qW0x/AkF9Klefx4LusYpjkNNL9ynVS8qLxirXB6nM
flbbr37s5543igh2jqGy6TGzbGw6X5Ys544nNx7d8Rub7n6Hlxzra9IfSC7RqCtIppz3MIUCUlnS
5NLZHwyZGgsOQQYih2CO0bMPaRt3Klq2jtF1CFtuAz1OfuxkyNtk5dPJCat7wnSoQx8aRC39SSpL
E6Nc4mFt2gk8WdCR4DbnbeKzzKbcd3i/smVPv+y+Wb/o2Ptp0+IZN6e93DHx8kH8WOzT4r4HMf0J
BPWp3DF1Y4G1oa1bMAb8c5FjlasrlVn9avvVBPsh0bJ+LtUD9J21x8na4ctWL4zdhtkfiJRI1A3M
EmXvbwoMZLhJU87wMGJqWG5AyTGAuK3rCH7nStvB7E8S+LOM2gJdbKdl0vFQhz40iFr6Uz9lWIct
pLrZdmZD3lam47GppEvl7jIvy3SFfmXrffpRTl8YN7eeVM6PIWtTal8oG0i/S0x/AlF8yt2GdRyf
/RTGwNXz1SsZq6ytGvWrEfaT6mGZH6e0XdLnOpbi8albfyBSItEmIENNmnLTgCl2+pQblozt4tnW
SVRg+NToPfXSL469ZebZt2VAZ2ZU2ocGUUt/6qcM67CBry4FYlrnbfXoMJv6dH3L7r6svtAvd73E
j0rHjerSeml7LlL7zjgMrF/NSTe4T7nbsF40Bq6er15Gga0lXd9+sR65X02xH/YxNsHqF33fXX1p
u0j/dhtWfyBSItEmIENMmk733uqgqcN+DOvbhnL6Ykj1ctOTTvtp/THS5VO7dr+OQ1fdB16ngdTS
n6Qyxy428NrbZrCF04ajb+tKbSafPTZ1kuZMF+vQI3/L2vD0K9veKc/WpTZ7fFk4ppx/dn2v59io
/iB+nBxzb58W9z2I6U8gqE956nd9yz8Geb0Bxwp6PX6U6vAyZ1v0fiXrzbFf59gk3xe/E+JySLsN
oT/JOkRKJNoEZKCkKSjz/3IcAcCQiZHoZOI4RA7vNie4oh4cLIMlPu425kxUlkt8uC6VVdmHhlNL
f/LZJlfutxeCDmYWaT17aJvaytqUbSrqpm3Rtn4fBM+Oq6TNzj48upZ03OC/OMmQvntsXMfus9uW
34+L+tQt7+d7ENWfQEifonricXr0+P7p01evcFwlnwZD7FdCre3nlmUXEiXfd1ffXWZjMZDdaB9E
1f1JgEiJRJuA9J00NQbmTHZdcrjY1KEPNaSR/qTUFvWnZqP2axYQKZFoE5DfLmlC1p2bchxCwlKH
PtSRJvqTUl/Un5qN2q9ZQKREok1Afr+ZJqW2qD8pIVF/ajZqv2YBkRKJNgHRpEmpDPUnJSTqT81G
7dcsIFIi0SYgmjQplaH+pIRE/anZqP2aBURKJNoEpDRpUlFRUVFRUVFR6SNpunfvnqIEQf1JCYn6
U7NR+zULtVdnDDRpUiqD+5P4XpUlwttSfn9i+xPg7SlhUfs1C26vtgLRpEmpDO5PoQOaBsj2EdOf
gPpUXNR+zYLbq61ANGlSKoP7U+iApgGyfcT0J6A+FRe1X7Pg9morEE2alMrg/hQ6oGmAbB8x/Qmo
T8VF7dcsuL3aCqTipGneTI6y/7phjI6Pm9Ge8lEzOTPplCdl8+n+5gu2uW2OTpp5Xu7ojk7O+8t7
2gFSW/fM/ORorl5uv1IfUNazDX2Wjh0Ujckixlc4hlhwfwod0DRAto+Y/gTUp+Ki9msW3F5tBTK8
mSY3UZCSCqkc68vGzUzZNl42Om7GkYRkCcKMGc8lDMn6+Iy/3G3Hg02YcvWwP5Z4ufvIytIkidql
cl+7bjnWxeN26kj7qhDuT6EDmgbI9hHTn4D6VFxC2+/u3bu5dbVfWLi92gqkeUmTTUQ8SRPfloJE
BknLzDib9RHqFZb3lXBAV5i5IV1pH6yM+mnLZ8b9iRboKRf67dbx7atCuD9JAQ1B79KlS+bcuXPm
zJkz5tSpU3b5/Pnz5vTp07YMywsLCz26GiDbR0x/AupTcSmzH/jnn38yG8J+sBmWaR2fsN/t27dt
fZ44qf3Cwu3VViD1Sprc20fY7tZLEopsNqdom4XN4DjbkETZNuwME9X3lPv6xvT8SUma0EjbeRn6
l7aJPozPpNuldt199Rx3qsvLfPviOpHh/iQFtOvXr5u9e/eaa9eumStXrtgT2s2bN+06giPKECBR
fvbsWXPnzp1MVwNk+4jpT0B9Ki5l9gOwy8mTJ60tYSe8mRo2RCKF9atXr1pOnDhhEydNmuLB7dVW
IM2YafKd6Iu20faszDMThIQDuk7ylCv39Y3jrdNn0pTNFiHRS2eNfPtEedFxUx1e7ttXhXB/kgIa
TmbHjh2z9Uh+/fpl4XL//n2zf/9+G0hJVwNk+4DQcmh/AupTcYHQsm+skRjdunXL1iVx7ff27Vtr
ZyTCXFftFxaIVN4mIM1Imqgcy/w2VNG2BPehbNC9RccRbm/xcl/fcniSMtKV9uGUzYwn+njImxI4
X7u8HMtS311d374qhPuTFNBw1T87O2t+/vxp3r17Z75//26OHz9uDh48aJep7MaNG2bHjh32k3Q1
QLaPmP4E1KfiUmY/gNuoAInSmzdvzJcvX8zmzZvtMuz37ds38/TpU7Nv3z5z8eLFnK7aLyzcXm0F
0qykCdgZoDRJKNqW/pLM3ubi21Efeu7tt7Jy3o6HwgfBhaTK1uftpbNbWZ997brlueP21OnzGGLC
/UkKaJgZwO0UBEIERMjc3JzZsmWLXf748aP59OmTnZ7fs2ePJk0tB0LLof0JqE/FBULLvrHG7BFm
m378+GHev39vk9x169bZ2SUsf/782Tx+/NgcPXrUXL58Oaer9gsLt1etwbkumygRJjIE7GM5PefU
3okWSL2SpuxAiXTmxTnZd2aQBt/WTVzcn+bTwHrKfX0TjOHObuWSNnc/Yv9Y8rOYMaE+9Tu+fThU
KLg/+U5yhw8fNh8+fDC7d+82U1NTZvXq1WbVqlVmzZo1djYAwRK3UXbu3KlJU8uJ6U9AfSouZfYD
SJjw7Nnr16/Nxo0bbcK0cuVKs3btWrNhwwbz8OFD8+jRI3Po0CFNmiLD7VVf2HPMWKeJkp56XeyP
xPBKHqonTUKkQIaXNCmtg/uTFNBwOwUnMlxRPnjwwH5u27bNbNq0KSt7+fKlnRnYunWrPSmSrgbI
9hHTn4D6VFzK7Adwaw7PKyHxxbNnz549swkvHtpHsvT8+XObOGGmUJ9pigu3V31xkiZ38sABkw3u
L9XtYzKeyQSIJk1KZXB/kgIarvgPHDhgXr16ZZ48eWKn3nft2mW2b99uvn79assQJPELGtxm0Zmm
dhPTn4D6VFzK7GfLL1yws02YEcSzS3iWaf369faW3IsXL6z98Ku5+fl5OyOV01X7BYXbq950Hosp
u5uSJUxYz5ImrtuB3y2CaNKkVAb3Jymg4Uof0+w4oeGKEkERnwiWmBEAeAYFPyvWZ5qUmP4E1Kfi
UmY/QLfnyIawGZJdSpgwA4VPzEbhNQRcV+0XFm6vOpO9socet+HPDWe4j+KkjCaJVM8jMt11iCZN
SmVwf5ICGmYG8PI6BEZMxWPaHVeUCJK4lYJlPNuA2QP8Ago/RSbdwgBJVxElU7VBqbKtqqjZMcX0
JxDFpxZbP/bYD6FfZfYDSJpgRyRJsBlsiOSJlmE/2BjJMWYMuW7tYkLD4faqLT32dG7X+cj0nOeK
HX2IJk1KZXB/kgIanlPAMwx40y9OZPgZ8ZEjRyx4jw5ObHiwF7MCeJmd/CK79AqCf3GKAmSsoFnU
Zj9wvVh9zCGMm0sl/eifmP4EgvpUUf0iFqsnUbN+ldkP9vj777/tLBKSJ9gJ9gKwIX4ZiU8kTLAl
3h4eLCYsc15Ps4TjXDI16Q+3V33p3F7L/QI9S4I6fpAbR4KNp30wnN+205kmZVhwf5KCJIHbKnjn
Ck3NAyyjDMvujADI9med3/mvQfpCsC9GpiuVhWCp+43VLx+2Pfc/Gh2q7lMJMf0JRPGpQcewqJ1B
qVm/yuxHCRCeWcKtU7IZZpTojeD4xRzsR29zF5Mm28dB7eepz+tVRU36w+1VazA2dLst90wTEiq+
zsiNZ5pk9+hr0qRUDPenopPcYqD90cN9PVcLhQFSCD65Lx6frs0/KIgrmvxrJtIvmdBmrp5Uln1B
+Zc2OQ7+c1ipX2kbk3jXSLqNrrSkNnPHmSKOG8i1l+4j1x7rQ1avG2hKj5n6NIA+9S2mP4GgPpWr
jxNg77GKY5DTS/cp1UvKi8Yq1wepzH5W269+7OfO/hXh1l2y/fDTc+FFw7njyY1Hd/zGZ7rf4fys
h6Pn7s/tC+nVoD/cXo2Ej98igWjSpFQG96fQJ7nO/hAY0i8/fz8HBRgWaDJdqcyZ4rVBxH7ZOoEn
CzoS9MV028QnS75mkkSom4g5uljm/cqWPf2y+2b9omPvp02LZ9ykqe5sv3wcUI/tO1fPaV/s0wD6
VCchpj+BoD6VOybnBGXrFowB/1zkWOXqSmVWv9p+NcF+SLSsn0v1AH1n7XGydviy1Qtjt2H2h9ur
icCnuzFrcUA0aVIqg/tT6CBp95cLJAgKaaDgAcENNP2UYR2BRKqbbacrtvTqjOpmOugPtjtBUdKl
cneZl2W6Qr+ydU+bLjl9YdzcelI5P4asTal9oWwg/S4x/QlE8Sl3G9ZxfPZTGANXz1evZKyytmrU
r0bYT6qHZX6c0nZJn+tYisenbv3h9morEE2alMrg/hQ6SGJ/9urYCQR2Op4HCgoeRD9lNsAkQcRX
lwIxrfO2enRYUPLp+pbdfVl9oV/ueklgLh03qkvrpe25SO074zCwfjUn3eA+5W7DetEYuHq+ehkF
tpZ0ffvFeuR+NcV+doZiktUv+r67+tJ2kf7tNqz+cHu1FYgmTUplcH8KHSQv3Dvde+uMpqKLAoUY
PDoBg/ZlA6+9bSbcnnP0bV2pzeRznJ6noFsGzt/hZLpYhx4FrKwNT7+y7Z3ybF1qk66ys2AoHFNu
Cr8bkHuOjeo7/cqQ2k+OubdPA+jTySEhpj+BoD7lqd/1Lf8Y5PUGHCvo9fhRqsPLnG3R+5WsN8d+
nWOTfF/8TojLIe02hP4k69xebQWiSZNSGdyfECSDMv8vJ7AABIbkS0/JiRNgLChDAMpggcotE+oj
6OA5A1rPHtqmtrI200BH9dLAJOqmbdG2fh8Ez46rpM3OPgpOpDRuCJY4yZC+e2xcx+6z25YN3GL7
RX3qlvv1u21G9ScQ0qeonnicHj2+f/r01SscV8mnwRD7lVBr+7ll2YVEyffd1XeX2VgMZDfaB1F1
fxK4vdoKRJMmpTLUn5SQqD81G7Vfs1B7adKkVIz6kxIS9admo/ZrFmovTZqUilF/UkKi/tRs1H7N
Qu2lSZNSMepPSkjUn5qN2q9ZqL00aVIqRv1JCYn6U7NR+zULtVefSRP+50dRQqD+pIRE/anZqP2a
BeTr16+tBqJJk1IZ6k9KSNSfmo3ar1lApESiTUA0aVIqg/uT+F6VJcLbUn5/YvsT4O0pYVH7NQuI
lEi0CYgmTUplcH8KHdA0QLaPmP4E1KfiovZrFhApkWgTEE2alMrg/hQ6oGmAbB8x/QmoT8VF7dcs
IFIi0SYgmjQplcH9KXRA0wDZPmL6E1Cfiovar1lApESiTUAqTprmzMQI+68bxsjYmBnpKR8xE9MT
TnlSNpfub65gm9vmyISZ4+WO7sjEnL+8px3gtCXWGTPTPt1+jmtsurv/hOmxpAzH0fc+0/KeMRkO
3J9CBzQNkO0jpj8B9am4qP2aBURKJNoEZHgzTTjx80TGXfeV24QhSUbKtvGykTEzNsKTh2kzlksm
knWboHjK3XYkfHX6Lcd67ricPtuykY5Ov/usGdyfQgc0DZDtI6Y/AfWpuIS235UrV3Lrar+wQKRE
ok1Ampc02cTGkzTxbSlzE0miMTFnZ2my2SShXmF5P8lI3/33lfce13Tad2xH/8cmUp1B26oJ3J+k
gIagd/LkSXP06FEzPz9vDh8+bJePHTtmjhw5YsuwfObMmR5dDZDtI6Y/AfWpuJTZD1y6dCmzIewH
m2GZ1vEJ+128eNHW54mT2i8sECmRaBOQeiVN7q0lKUGYHuveaivaZsGtuXS2xtlmb3WhDekWmFvu
6xvTE+sgCVrScaWJFK3zT98+pXJqY8hwf5IC2tmzZ83evXvNtWvXbPA7f/68uXnzpl0/d+6cLVtY
WLDlx48fN5cvX850NUC2j5j+BNSn4lJmP/Dnn3/apOn69evWTiiDDZFMYf3q1asWJFMo06QpHhAp
kWgTkGbMNPmSgKJttD0rQwLCb72lIFmBrpM85cp9feMU9d9X7us706EkbmyalQ/aVk3g/iQFNFwx
4sqfy69fvyxc8Dr7/fv325Mi6WqAbB8QWg7tT0B9Ki4QWvaNNex369YtW5fEtd/bt29tPcw6cV21
X1ggUiLRJiDNSJqoHMv89lnRtgTcmsuSkpTuLTpOye06X984vjr9lLt9922jcr6d4yuvCdyfpIB2
+vRpMzs7a37+/GnevXtnvn//bmcADh48aJep7MaNG2bHjh12toB0NUC2j5j+BNSn4lJmP4DbqLAj
EqU3b96YL1++mM2bN9tl2O/bt2/m6dOnZt++febEiRM5XbVfWCBSItEmIM1KmoCdAXKSCGlb+qs5
O0PDt6M+9Nzbb2XlvB0JX51+y4uOi6DyQduqCdyfpIBGt1MQCBEQIXNzc2bLli12+ePHj+bTp092
en7Pnj3ZdD3QANk+ILQc2p+A+lRcILTsG2vMHsEuP378MO/fv7dJ7rp16+zsEpY/f/5sHj9+bOv9
9ddfOV21X1ggUiJRHbNmxfIps8DX+aTIillWl7EwZZZn9ZabqQXaVq4/uyIpZ21C6pU08QOwjHR+
Ru8kAp0ZpMG3dW/Rua8+oNt2nnJf3/itvqJERtIduO8J1EbRPqVy95bkkOD+5DvJ4eHODx8+mN27
d5upqSmzevVqs2rVKrNmzRo7G4Bgiecbdu7cqUlTy4npT0B9Ki5l9gO47YbnlF6/fm02btxoE6aV
K1eatWvXmg0bNpiHDx+aR48emUOHDmnSFBmIm1RUxcLU8s75jCdNsyvMilmqs2CmlvOEyFOe6GT7
KNFHwrR8xQqzvDZJk9I6uD9JAQ3T8DiR4YrywYMH9nPbtm1m06ZNWdnLly/tzMDWrVtzz6BogGwf
Mf0JqE/Fpcx+ALfnkDgh8b1//7559uyZTXjv3Lljk6Xnz5/bxAkzhfpMU1wglFAMBcwY5WaaOJg1
WmFme8qdZMi7j7w+krTlUws99SGaNCmVwf1JCmh4puTAgQPm1atX5smTJ3bqfdeuXWb79u3WYVGG
IIm6uM2iM03tJqY/AfWpuJTZD+AZNNgFM4J4dgnPMq1fv97eknvx4oW13+3bt+2v506dOpXTVfuF
BdJJMIaEmPAgKcIdFSlhIvhtOHc2qlc/S5iwrkmTMky4P0kBDb92wjQ7nBNXlAiK+ESwxIwAwDMo
d+/etVeW+iB4u4npT0B9Ki5l9gN0e45sCJsh2aWECTNQ+EQ9vJqA66r9wgKxicSwKJ1pkm7PdW6z
dW7DpQmS+OwT6VMS5ZC2C9GkSakM7k9SQMPtEZzoEBAxFY9pd1xRIkjiVgqW8WwDfh6OX0BduHAh
0y0MkPxZMOlZsRhU2VZV1OyYYvoTiOJTi60fe+yH0K8y+wEkQ3jmDDaEzWBDJE+0DPtRcozbsVy3
djGh4UB6k40KKUyaeHLE6NFxbtcx+tGHaNKkVAb3Jymg4eWCeC4B0+y4rYKfEeOZBkAnNjzYi1kB
fMovshP+a7AoQMYKmksNylwvVh9zCOPmUkk/+iemP4GgPlVUv4jF6knUrF9l9oM98KZv2Aa36MhO
ADbELyPxiYTpjz/+sPYOFhOWOa+nWcJxLpma9AeSSyiqxklgFqZWsOSHzzR1Zos6t9g6t+ayZAj7
SG/F+fUZmjQpw4T7kxQkCdwmwTtXcJWJEx7AMsqwjDf/ujrZ/mwwkf63ryBAxgg+S91vrH75sO25
/9HoUHWfSojpTyCKTw06hkXtDErN+lVmP0qAkDhhFpBshhkl3IrDOn4xB/vR29zFpMn2cVD7eerz
elVRk/5AcglFhWS/nkuxSRB+CeeW2fpOAmQTJarHyr36DE2alGHC/anoJLcYaH/ifw1SgJECjS/4
oDz7QrEXj9rXVnS/aHgPWP4lqmlgE9rM1ZPKstdD5F99MTI21u2j1K+0jQn6C6AEej+Z1GbuOFPE
cQO59tJ95NpjfcjqdYN76TFTnwbQp77F9CcQ1Kdy9XEC7D1WcQxyeuk+pXpJedFY5fogldnPavvV
j/3c2b8i3LpLth/enUfv7WP1cseTG4/u+I1Nd7/D2bsCUcfVc/fn9oX0atAfSE9SUUeQDPne2bRE
IJo0KZXB/Sn0Sa6zPwSG9MtPLzLFdgowLNBkulJZmhjlEg8brDqBJws6EhTY3DbxyZKv6SQR6iZi
ji6Web+yZU+/7L5Zv+jY+2nT4hk3p73cMfFyW4/tO1fPaV/s0wD6VCchpj+BoD6VOybnBGXrFowB
/1zkWOXqSmVWv9p+NcF+SLSsn0v1AH1n7XGydviy1Qtjt2H2ByIlEnUDs1LirFEAIJo0KZXB/Sl0
kLT7ywUSBIU0UPCA4AaafsqwjkAi1c220xVbenVGdTMd9AfbnaAo6VK5u8zLMl2hX9m6p02XnL4w
bm49qZwfQ9am1L5QNpB+l5j+BKL4lLsN6zg++ymMgavnq1cyVllbNepXI+wn1cMyP05pu6TPdSzF
41O3/kCkRKJNQDRpUiqD+1PoIIn95aaVU+x0PA8UFDyIfspsgEmCiK8uBWJa52316LCg5NP1Lbv7
svpCv9z1ksBcOm5Ul9ZL23OR2nfGYWD9ak66wX3K3Yb1ojFw9Xz1MgpsLen69ov1yP1qiv2wj7EJ
Vr/o++7qS9tF+rfbsPoDkRKJNgHRpEmpDO5PoYPkhXune2+d0VR0UaAQg0cnYNC+bOC1t82E23OO
vq0rtZl8jtHzFHTLwPm7nEwX69CjgJW14elXtr1Tnq1LbdJVdhYMhWPKTeF3A3LPsVF9p18ZUvvJ
Mff2aQB9OjkkxPQnENSnPPW7vuUfg7zegGMFvR4/SnV4mbMter+S9ebYr3Nsku+L3wlxOaTdhtCf
ZB0iJRJtAqJJk1IZ3J8QJIMy/y8nsAAEhuRLT8mJE2AsKEMAymCByi0T6iPo4DkDWs8e2qa2sjbT
QEf10sAk6qZt0bZ+HwTPjqukzc4+Ck6kNG4IljjJkL57bFzH7rPblg3cYvtFfeqW+/W7bUb1JxDS
p6ieeJwePb5/+vTVKxxXyafBEPuVUGv7uWXZhUTJ993Vd5fZWAxkN9oHUXV/EiBSItEmIJo0KZWh
/qSERP2p2aj9mgVESiTaBESTJqUy1J+UkKg/NRu1X7OASIlEm4Bo0qRUhvqTEhL1p2aj9msWECmR
aBMQTZqUylB/UkKi/tRs1H7NAiIlEm0CokmTUhnqT0pI1J+ajdqvWUCkRKJNQEqTpnv37ilKENSf
lJCoPzUbtV+zUHt1xkCTJqUy1J+UkKg/NRu1X7NQe2nSpFQM9yfxvSpLhLel/P7E9ifA21PCovZr
FtxebQWiSZNSGdyfQgc0DZDtI6Y/AfWpuKj9mgW3V1uBaNKkVAb3p9ABTQNk+4jpT0B9Ki5qv2bB
7dVWIJo0KZXB/Sl0QNMA2T5i+hNQn4qL2q9ZcHu1FcjwkqaZ8e5/3oDxmWzb/ORobtvo5Hxn2/yk
GXXqgpnxpGx00sz3uz3HqJmcccuTsvmuvkXqr29/rq5l3kyOJtvRD3dbwVgM3K6zrWfs3PKE0vG2
jJuZnnbZsRb1KW2H+1PogKYBsn3E9CegPhUXtV+z4PZqK5ChJE2dk3RyEmZlM+Oddbstl1jMmPHk
BGxP5Dgxj46b8VHnZJ2sj1JSVLpdSFrccqyz/nn769ufhK3r9C2hdCwGahdjxfefrNsEzFdeMt5Y
52257WKd+uftUxfuT6EDmgbI9hHTn4D6VFxC2+/u3bu5dbVfWLi92gpkCEkTZlzyiUMX9+SeQifk
9HMmOdHTSR2zSOOTg23vObH3lKMflKwU9Ne3PwEkJ+gT+pMlJIVjsZh2eb/7LS8Y76JlC9tvH2PB
/UkKaAh6ly5dMufOnTNnzpwxp06dssvnz583p0+ftmVYXlhY6NHVANk+YvoTUJ+KS5n9wD///JPZ
EPaDzbBM6/iE/W7fvm3r88RJ7RcWbq+2Aqk+acLJVTyBp9uKkoFsu7PufhZtz90+Ssjppe3hlhit
W52C/kr766nLEqCB9j14u/ZWJNb5LT5fOfYj9teTDLn1e44lbYNw9s39SQpo169fN3v37jXXrl0z
V65csSe0mzdv2nUER5QhQKL87Nmz5s6dO5muBsj2EdOfgPpUXMrsB2CXkydPWlvCTngzNWyIRArr
V69etZw4ccImTpo0xYPbq61AhpM0iSfqom1u0tRNAsZnmN4A23P7R7nvZO/TKdvGydXDsaQJ1GL3
3U+79CyUkzzlyr37KUiaFjNOKdyfpICGk9mxY8dsPZJfv35ZuNy/f9/s37/fBlLS1QDZPiC0HNqf
gPpUXCC07BtrJEa3bt2ydUlc+719+9baGYkw11X7hQUilbcJSPVJE08a+t1GJ+SeE7hzYh9kO8en
Zynor29/Dp1nk1iykdC5RbeIsQB9ttvZBz8Wt9zThjsevmW+7z76xP1JCmi46p+dnTU/f/407969
M9+/fzfHjx83Bw8etMtUduPGDbNjxw77SboaINtHTH8C6lNxKbMfwG1UgETpzZs35suXL2bz5s12
Gfb79u2befr0qdm3b5+5ePFiTlftFxZur7YCGULS1MfDz7mTL07s/EFw4cRM5UvdTut2NqbbP29/
ffvLgVtz6YwXlbHbWqVjMUi7KJduv/nKk+XC8XbqFo6Tu02A+5MU0DAzgNspCIQIiJC5uTmzZcsW
u/zx40fz6dMnOz2/Z88eTZpaDoSWQ/sTUJ+KC4SWfWON2SPMNv348cO8f//eJrnr1q2zs0tY/vz5
s3n8+LE5evSouXz5ck5X7RcWbq9agHNOz0SEUC8jObe55yi68+Ke8zz7hQwlaQKdhKDbMX4byd2W
JRy+EzOV97Od7bfDaOeVA45epw/dWRixv7798ZkbsU/5GZ5BxqK43U6Cli/Dfnzlchu58c7K5WQt
G6ee1zaAfDvcn3wnucOHD5sPHz6Y3bt3m6mpKbN69WqzatUqs2bNGjsbgGCJ2yg7d+7UpKnlxPQn
oD4VlzL7ASRMePbs9evXZuPGjTZhWrlypVm7dq3ZsGGDefjwoXn06JE5dOiQJk2R4faqBUnC052M
8Nw1ScnOcfz85UyOZBTsFzK0pElpH9yfpICG2yk4keGK8sGDB/Zz27ZtZtOmTVnZy5cv7czA1q1b
7UmRdDVAto+Y/gTUp+JSZj+AW3N4XgmJL549e/bsmU148dA+kqXnz5/bxAkzhfpMU1y4vepHwa/N
Ceeif2a8pL4lv1+IJk1KZXB/kgIarvgPHDhgXr16ZZ48eWKn3nft2mW2b99uvn79assQJPELGtxm
0ZmmdhPTn4D6VFzK7GfLL1yws02YEcSzS3iWaf369faW3IsXL6z98Ku5+fl5OyOV01X7BYXbq3aI
d3QccnU6j6HwOyO5R2hEHU2alIrh/iQFNFzpY5odJzRcUSIo4hPBEjMCAM+g4GfF+kyTEtOfgPpU
XMrsB+j2HNkQNkOySwkTZqDwidkovIaA66r9wsLtVS+Kb81l9CRN7NYctvXcquvdL0STJqUyuD9J
AQ0zA3h5HQIjpuIx7Y4rSgRJ3ErBMp5twOwBfgGFnyKTbmGApC+Lc9UQlSrbqoqaHVNMfwJRfGqx
9WOP/RD6VWY/gKQJdkSSBJvBhkieaBn2g42RHGPGkOvWLiY0HG6v+tBnwgRytnaSpp7be/J+IZo0
KZXB/UkKaHhOAc8w4E2/OJHhZ8RHjhyx4D06OLHhwV7MCuBldvKL7NKH3nkgLAqQsYJmUZv9wPVi
9TGHMG4ulfSjf2L6EwjqU0X1i1isnkTN+lVmP9jj77//trNISJ5gJ9gLwIb4ZSQ+kTDBlnh7eLCY
sMz5NdYSjnPJ1KQ/3F61wI6LlDB17N3zazpnzHL/zmH3lSZR3v1q0qRUDPcnKUgSuK2Cd67Q1DzA
Msqw7M4IgGx/9osh/f9gQYCMEXyWut9Y/fJh2+v9b8TeOhX2qYSY/gSi+NSgY1jUzqDUrF9l9qME
CM8s4dYp2QwzSvRGcPxiDvajt7mLSZPt46D289Tn9aqiJv3h9qoDPb8szxLL3lki+RfiaTJty7r1
/fvVpEmpGO5PRSe5xUD7g8PDwXuuIgoDpBB8UJ59afg0Lr6Q3S8Tvnz5L1n65RPazNWTyrIvLv8y
J8cxPt7to9SvtI1J+qucBHqoUWozd5wp4riBXHvpPnLt8aszqucJQGn7Yp8G0Ke+xfQnENSncvVx
Auw9VnEMcnrpPqV6SXnRWOX6IJXZz2r71Y/93Nm/Ity6S7YffpJOr39h9XLHkxuP7viNz3S/w9kD
xqjj6rn7c/tCejXoD7dXreHjFBiIJk1KZXB/Cn2S6+wPgSH98uOLQ194CjAs0GS6UlmaGOUSD/sl
7ASeLOhI0BfWbROfLPmiF5iKuljm/cqWPf2y+2b9omPvp02LZ9yc9nLHxMttPbbvXD2nfbFPA+hT
nYSY/gSC+lTumJwTlK1bMAb8c5FjlasrlVn9avvVBPsh0bJ+LtUD9J21x8na4ctWL4zdhtkfbq86
A9/txqawQDRpUiqD+1PoIGn3lwskCAppoOABwQ00/ZRhHYFEqpttpyu29OqM6mY66A+2O0FR0qVy
d5mXZbpCv7J1T5suOX1h3Nx6Ujk/hqxNqX2hbCD9LjH9CUTxKXcb1nF89lMYA1fPV69krLK2atSv
RthPqodlfpzSdkmf61iKx6du/eH2aisQTZqUyuD+FDpIYn/26tgJBHY6ngcKCh5EP2U2wCRBxFeX
AjGt87Z6dFhQ8un6lt19WX2hX+56SWAuHTeqS+ul7blI7TvjMLB+NSfd4D7lbsN60Ri4er56GQW2
lnR9+8V65H41xX525mKS1S/6vrv60naR/u02rP5we7UViCZNSmVwfwodJC/cO91764ymoosChRg8
OgGD9mUDr71tJtyec/RtXanN5HOcnqegWwbO3/dkuliHHgWsrA1Pv7LtnfJsXWqTrrKzYCgcU24K
vxuQe46N6jv9ypDaT465t08D6NPJISGmP4GgPuWp3/Ut/xjk9QYcK+j1+FGqw8ucbdH7law3x36d
Y5N8X/xOiMsh7TaE/iTr3F5tBaJJk1IZ3J8QJIMy/y8nsAAEhuRLT8mJE2AsKEMAymCByi0T6iPo
4DkDWs8e2qa2sjbTQEf10sAk6qZt0bZ+HwTPjqukzc4+Ck6kNG4IljjJkL57bFzH7rPblg3cYvtF
feqW+/W7bUb1JxDSp6ieeJwePb5/+vTVKxxXyafBEPuVUGv7uWXZhUTJ993Vd5fZWAxkN9oHUXV/
Eri92gpEkyalMtSflJCoPzUbtV+zUHtp0qRUjPqTEhL1p2aj9msWai9NmpSKUX9SQqL+1GzUfs1C
7aVJk1Ix6k9KSNSfmo3ar1movTRpUipG/UkJifpTs1H7NQu1V59JE/7nR1FCoP6khET9qdmo/ZoF
5OvXr60GokmTUhnqT0pI1J+ajdqvWUCkRKJNQDRpUiqD+5P4XpUlwttSfn9i+xPg7SlhUfs1C4iU
SLQJiCZNSmVwfwod0DRAto+Y/gTUp+Ki9msWECmRaBMQTZqUyuD+FDqgaYBsHzH9CahPxUXt1ywg
UiLRJiCaNCmVwf0pdEDTANk+YvoTUJ+Ki9qvWUCkRKJNQIaXNE2Pdf/zBoxNZ9vmJkZy20Ym5jrb
5ibMCF+nspExMzbC9sUYGRuzOt2yETMxx3Rz25zt/zVnJvreL0h0p919FrXH2yLSNkcmzBwvd3Td
McmVlx7XcOD+FDqgaYBsHzH9CahPxUXt1ywgUiLRJiBDSZo6SdGYmWZl00kSgnW7LZcwTJsxngzY
BMlJRHj9ftapbXdbEWX79ZUXtce38TL3GO0YOOs2yfSUu+3UBO5PoQOaBsj2EdOfgPpUXELb78qV
K7l1tV9YIFIi0SYgQ0iaMJPim/Vwk4AUSgLoE7NUNDPlJghl67aNCpOmwvbYthQkjUgQp8fYbJJQ
r7B8kOOqEO5PUkBD0Dt58qQ5evSomZ+fN4cPH7bLx44dM0eOHLFlWD5z5kyPrgbI9hHTn4D6VFzK
7AcuXbqU2RD2g82wTOv4hP0uXrxo6/PESe0XFoiUSLQJSPVJE07oYgKQbhNP9mlywLYjqRibFnTK
1pFw0Tq2ubexeF2OtF9Jt6w93zYLSyidbThe2wa7jektH+S4KoT7kxTQzp49a/bu3WuuXbtmg9/5
8+fNzZs37fq5c+ds2cLCgi0/fvy4uXz5cqarAbJ9xPQnoD4VlzL7gT///NMmTdevX7d2QhlsiGQK
61evXrUgmUKZJk3xgEiJRJuADCdp8p3Avdt6k6asrqsjrfuSB7duEWXt8PKi9nzbaHtWhmMWZt2Q
TEHXSZ5y5b6+DRnuT1JAwxUjrvy5/Pr1y8IFr7Pfv3+/PSmSrgbI9gGh5dD+BNSn4gKhZd9Yw363
bt2ydUlc+719+9bWw6wT11X7hQUiJRJtAlJ90uRLBoq2URLgJAO4lTU24SQIbsLA17HMZ7ncukUU
7ZfTb3vutgT3AXjQvUXHSZNIX7mvb0OG+5MU0E6fPm1mZ2fNz58/zbt378z379/tDMDBgwftMpXd
uHHD7Nixw84WkK4GyPYR05+A+lRcyuwHcBsVdkSi9ObNG/PlyxezefNmuwz7ffv2zTx9+tTs27fP
nDhxIqer9gsLREok2gRkCEnTUh8E791WOHvkrtsZmbTtQZKLsv36yova49vSX83ZW458O+pDz739
VlbO26kJ3J+kgEa3UxAIERAhc3NzZsuWLXb548eP5tOnT3Z6fs+ePdl0PdAA2T4gtBzan4D6VFwg
tOwba8wewS4/fvww79+/t0nuunXr7OwSlj9//mweP35s6/311185XbVfWCBSIhGdhSmznE0kLJ9a
SLfNmhVZ+Qoz6+plyPUWppanZYwVs976ADKUpAn0zKqwk7+7LUskpGSAEgtad+sIOp39jwivBwCe
WTBpv5Iu9lnU3gDbujNv7qsPqI+ecl/fxNm96uD+5DvJ4eHODx8+mN27d5upqSmzevVqs2rVKrNm
zRo7G4Bgiecbdu7cqUlTy4npT0B9Ki5l9gO47YbnlF6/fm02btxoE6aVK1eatWvXmg0bNpiHDx+a
R48emUOHDmnSFBlINxGpkNkVZsUsrSOhWW6mFr6a2RXLsnKbANmEh+oRC2Zqebce9rVs+ZRZ6KnX
2d/yqdnC+pChJU1K++D+JAU0TMPjRIYrygcPHtjPbdu2mU2bNmVlL1++tDMDW7duzT2DogGyfcT0
J6A+FZcy+wHcnkPihMT3/v375tmzZzbhvXPnjk2Wnj9/bhMnzBTqM01xgfAkYzggCULShOSJzQJh
NkpMhpx6PespdjYL5cX1IZo0KZXB/UkKaHim5MCBA+bVq1fmyZMndup9165dZvv27dZhUYYgibq4
zaIzTe0mpj8B9am4lNkP4Bk02AUzgnh2Cc8yrV+/3t6Se/HihbXf7du37a/nTp06ldNV+4UF0kkk
hkiWHPWZDNnyzsxUZ52SLl6HZplw26+4PkSTJqUyuD9JAQ2/dsI0O5wTV5QIivhEsMSMAMAzKHfv
3rVXlvogeLuJ6U9AfSouZfYDdHuObAibIdmlhAkzUPhEPbyagOuq/cIC6SQSw4InNP0mTQnOM1E9
zz9ls0zl9SGaNCmVwf1JCmi4PYITHQIipuIx7Y4rSgRJ3ErBMp5twM/D8QuoCxcuZLqFAZKeRxOe
b4tGlW1VRc2OKaY/gSg+tdj6scd+CP0qsx9AMoRnzmBD2Aw2RPJEy7AfJce4Hct1axcTGg4kSzQq
x50BcpKkbAaKtnsQ6nVnmVg9wqkP0aRJqQzuT1JAw8sF8VwCptlxWwU/I8YzDYBObHiwF7MC+JRf
ZJc+HM8DYVGAjBU0lxqUuV6sPuYQxs2lkn70T0x/AkF9qqh+EYvVk6hZv8rsB3vgTd+wDW7RkZ0A
bIhfRuITCdMff/xh7R0sJixzXveyhONcMjXpD6QnqagCO/Mj31KTHwTvPPzdmwgJ5XbfnhkqoT5E
kyalMrg/SUGSwG0SvHMFV5k44QEsowzLePOvq5PtzwYTz/8TSoEmVvBZ6n5j9cuHbc/9z0OHqvtU
Qkx/AlF8atAxLGpnUGrWrzL7UQKExAmzgGQzzCjhVhzW8Ys52I/e5i4mTbaPg9rPU5/Xq4qa9AeS
TyqqQXo1QPf5IyrjiY8zK4VfwOX0qJ4nufLW16RJqRjuT0UnucVA+8MrHHBFlvvvPgowUqDxBR+U
p1+c/DvF0neDpeB1GPlXZKSBTWgzV08q87xKYmRsrNtHqV9pGxP0lzoJ9JoOqc3ccaaI4wZy7aX7
yLXH+pDV6wb30mOmPg2gT32L6U8gqE/l6uME2Hus4hjk9NJ9SvWS8qKxyvVBKrOf1farH/u5s39F
uHWXbD+8zoZehcPq5Y4nNx7d8Rub7n6Hc6/McfXc/bl9Ib0a9AfCE4jagqRHfP3A0oFo0qRUBven
0Ce5zv4QGNIvP39/FwUYFmgyXaksTYxyiYcNVp3AkwUdCQpsbpv4ZMkXvcxV1MUy71e27OmX3Tfr
Fx17P21aPOPmtJc7Jl5u67F95+o57Yt9GkCf6iTE9CcQ1Kdyx+ScoGzdgjHgn4scq1xdqczqV9uv
JtgPiZb1c6keoO+sPU7WDl+2emHsNsz+QKREom5gZqr7XqewQDRpUiqD+1PoIGn3lwskCAppoOAB
wQ00/ZRhHYFEqpttpyu29OqM6mY66A+2O0FR0qVyd5mXZbpCv7J1T5suOX1h3Nx6Ujk/hqxNqX2h
bCD9LjH9CUTxKXcb1nF89lMYA1fPV69krLK2atSvRthPqodlfpzSdkmf61iKx6du/YFIiUSbgGjS
pFQG96fQQRL7y00rp9jpeB4oKHgQ/ZTZAJMEEV9dCsS0ztvq0WFByafrW3b3ZfWFfrnrJYG5dNyo
Lq2Xtucite+Mw8D61Zx0g/uUuw3rRWPg6vnqZRTYWtL17RfrkfvVFPthH9l/nGJb0ffd1Ze2i/Rv
t2H1ByIlEm0CokmTUhncn0IHyQv3TvfeOqOp6KJAIQaPTsCgfdnAa2+bCbfnHH1bV2oz+Ryj5yno
loHz1zmZLtahRwEra8PTr2x7pzxbl9qkq+wsGArHlJvC7wbknmOj+k6/MqT2k2Pu7dMA+nRySIjp
TyCoT3nqd33LPwZ5vQHHCno9fpTq8DJnW/R+JevNsV/n2CTfF78T4nJIuw2hP8k6REok2gREkyal
Mrg/IUgGZf5fTmABCAzJl56SEyfAWFCGAJTBApVbJtRH0MFzBrSePbRNbWVtpoGO6qWBSdRN26Jt
/T4Inh1XSZudfRScSGncECxxkiF999i4jt1nty0buMX2i/rULffrd9uM6k8gpE9RPfE4PXp8//Tp
q1c4rpJPgyH2K6HW9nPLsguJku+7q+8us7EYyG60D6Lq/iRApESiTUA0aVIqQ/1JCYn6U7NR+zUL
iJRItAmIJk1KZag/KSFRf2o2ar9mAZESiTYB0aRJqQz1JyUk6k/NRu3XLCBSItEmIJo0KZWh/qSE
RP2p2aj9mgVESiTaBESTJqUy1J+UkKg/NRu1X7OASIlEm4CUJk337t1TlCCoPykhUX9qNmq/ZqH2
6oyBJk1KZag/KSFRf2o2ar9mofbSpEmpGO5P4ntVlghvS/n9ie1PgLenhEXt1yy4vdoKRJMmpTK4
P4UOaBog20dMfwLqU3FR+zULbq+2AtGkSakM7k+hA5oGyPYR05+A+lRc1H7NgturrUA0aVIqg/tT
6ICmAbJ9xPQnoD4VF7Vfs+D2aiuQ6pOm+Ukzyv7bpozRyflUd95MjiZlo5Nmnu+Lr+cQ6qfMT472
tiH2a9RMzud1lcXD/Sl0QNMA2T5i+hNQn4qL2q9ZcHu1FchwkiZvopPg227Lx834KEtkivYl1U+w
CVNOJ0muxpP1sn4pS4b7U+iApgGyfcT0J6A+FZfQ9rt7925uXe0XFm6vtgJpTNKEZAczQjPjbPap
YF9i/XszZtw3e6RJU3S4P0kBDUHv0qVL5ty5c+bMmTPm1KlTdvn8+fPm9OnTtgzLCwsLPboaINtH
TH8C6lNxKbMf+OeffzIbwn6wGZZpHZ+w3+3bt219njip/cLC7dVWIMNJmtzbYDxZEZMX3GpLk52Z
8W59b6IzaP10W1G/lCXD/UkKaNevXzd79+41165dM1euXLEntJs3b9p1BEeUIUCi/OzZs+bOnTuZ
rgbI9hHTn4D6VFzK7Adgl5MnT1pbwk54MzVsiEQK61evXrWcOHHCJk6aNMWD26utQJox05QrY7NF
vn31VT995omSI9++lGBwf5ICGk5mx44ds/VIfv36ZeFy//59s3//fhtISVcDZPuA0HJofwLqU3GB
0LJvrJEY3bp1y9Ylce339u1ba2ckwlxX7RcWiFTeJiCNSJrcB7dB9vC2sC9vfen2HO1Dk6bocH+S
Ahqu+mdnZ83Pnz/Nu3fvzPfv383x48fNwYMH7TKV3bhxw+zYscN+kq4GyPYR05+A+lRcyuwHcBsV
IFF68+aN+fLli9m8ebNdhv2+fftmnj59avbt22cuXryY01X7hYXbq61AGpA0dWaExmdYHbrlJu6r
oH6y3PMguCZNlcH9SQpomBnA7RQEQgREyNzcnNmyZYtd/vjxo/n06ZOdnt+zZ48mTS0HQsuh/Qmo
T8UFQsu+scbsEWabfvz4Yd6/f2+T3HXr1tnZJSx//vzZPH782Bw9etRcvnw5p6v2Cwu3Vz3AJAib
HBmfEeoI9dKJE2lyJb+PRM/JCSDDSZrcjvLZHzd5EZOZdMZoxt3XuJkpqp+24Q5WNmvFyjo4s1LK
kuD+5DvJHT582Hz48MHs3r3bTE1NmdWrV5tVq1aZNWvW2NkABEvcRtm5c6cmTS0npj8B9am4lNkP
IGHCs2evX782GzdutAnTypUrzdq1a82GDRvMw4cPzaNHj8yhQ4c0aYoMt1ctmBlnkyPsOWa3nj3/
J7lBT3ke/qOxLEeoRdKktBbuT1JAw+0UnMhwRfngwQP7uW3bNrNp06as7OXLl3ZmYOvWrfakSLoa
INtHTH8C6lNxKbMfwK05PK+ExBfPnj179swmvHhoH8nS8+fPbeKEmUJ9piku3F71oygx6iNpspMm
Th1hAgaiSZNSGdyfpICGK/4DBw6YV69emSdPntip9127dpnt27ebr1+/2jIESfyCBrdZdKap3cT0
J6A+FZcy+9nyCxfsbBNmBPHsEp5lWr9+vb0l9+LFC2s//Gpufn7ezkjldNV+QeH2qg/0g66ipAhJ
U/cOUvcVRF3yryZK0aRJGTbcn6SAhit9TLPjhIYrSgRFfCJYYkYA4BkU/KxYn2lSYvoTUJ+KS5n9
AN2eIxvCZkh2KWHCDBQ+MRuF1xBwXbVfWLi96kf+ERw/Qj1plonKNWlShgn3JymgYWYAL69DYMRU
PKbdcUWJIIlbKVjGsw2YPcAvoPBTZNItDJDk/MKXIBpVtlUVNTummP4EovjUYuvHHvsh9KvMfgBJ
E+yIJAk2gw2RPNEy7AcbIznGjCHXrV1MaDjcXnUEs0W5H4CJ9D77JM4yAcE3IJo0KZXB/UkKaHhO
Ac8w4E2/OJHhZ8RHjhyx4D06OLHhwV7MCuBldvKL7NLpWu7sRQEyVtAsarMfuF6sPuYQxs2lkn70
T0x/AkF9qqh+EYvVk6hZv8rsB3v8/fffdhYJyRPsBHsB2BC/jMQnEibYEm8PDxYT3Ns4SzjOJVOT
/nB71YH5yXGW/PAZpI69s/HiD4zbsWSzSu46RxhjiCZNSmVwf5KCJIHbKnjnCk3NAyyjDMvujADI
9mcd3fMfhcKXQPpiBGGp+43VLx+2vd7/auytU2GfSojpTyCKTw06hkXtDErN+lVmP0qA8MwSbp2S
zTCjRG8Exy/mYD96m7uYNNk+Dmo/T31erypq0h9ur1qAVwmxZ5W6s0zOLTiMlVjPSa4Y7i/sSQei
SZNSGdyfik5yi4H2B2fHlyA35UoBRgo0vuCT+6LxK5H8Q4X4MuW/YOmXVWgzV08qc66UqHx0fLzb
R6lfaRuTyTGTDn3JpTZzx5kijhvItZfuI9ce60NWrxuwSo+Z+jSAPvUtpj+BoD6Vq48TYO+ximOQ
00v3KdVLyovGKtcHqcx+Vtuvfuznzv4V4dZdsv1wUqb39rB6uePJjUd3/MZnut/h7CSNOq6euz+3
L6RXg/5we9UaPk6BgWjSpFQG96fQJ7nO/hAY0i8/vjj0hacAwwJNpiuVpYlRLvGwX8JO4MmCjgR9
Yd028cmSr5kkEeqZEvYExe6yp19236xfdOz9tGnxjJvTXu6YeLmtx/adq+e0L/ZpAH2qkxDTn0BQ
n8odk3OCsnULxoB/LnKscnWlMqtfbb+aYD8kWtbPpXqAvrP2OFk7fNnqhbHbMPvD7VVn4Lvd2BQW
iCZNSmVwfwodJO3+coEEQSENFDwguIGmnzKsI5BIdbPtdMWWXp1R3UwH/cF2JyhKulTuLvOyTFfo
V7buadMlpy+Mm1tPKufHkLUptS+UDaTfJaY/gSg+5W7DOo7Pfgpj4Or56pWMVdZWjfrVCPtJ9bDM
j1PaLulzHUvx+NStP9xebQWiSZNSGdyfQgdJ7M9eHTuBwE7H80BBwYPop8wGmCSI+OpSIKZ13laP
DgtKPl3fsrsvqy/0y10vCcyl40Z1ab20PRepfWccBtav5qQb3KfcbVgvGgNXz1cvo8DWkq5vv1iP
3K+m2M/OXEyy+kXfd1df2i7Sv92G1R9ur7YC0aRJqQzuT6GD5IV7p3tvndFUdFGgEINHJ2DQvmzg
tbfNhNtzjr6tK7WZfI7T8xR0ywB/AyTpYh16FLCyNjz9yrZ3yrN1qU26ys6CoXBMuSn8bkDuOTaq
7/QrQ2o/OebePg2gTyeHhJj+BIL6lKd+17f8Y5DXG3CsoNfjR6kOL3O2Re9Xst4c+3WOTfJ98Tsh
Loe02xD6k6xze7UViCZNSmVwf0KQDMr8v5zAAhAYki89JSdOgLGgDAEogwUqt0yoj6CD5wxoPXto
m9rK2kwDHdVLA5Oom7ZF2/p9EDw7rpI2O/soOJHSuCFY4iRD+u6xcR27z25bNnCL7Rf1qVvu1++2
GdWfQEifonricXr0+P7p01evcFwlnwZD7FdCre3nlmUXEiXfd1ffXWZjMZDdaB9E1f1J4PZqKxBN
mpTKUH9SQqL+1GzUfs1C7aVJk1Ix6k9KSNSfmo3ar1movTRpUipG/UkJifpTs1H7NQu1lyZNSsWo
PykhUX9qNmq/ZqH26jNpUlFRUVFRUVFR6SNpwv/8KEoI1J+UkKg/NRu1X7OAfP36tdVANGlSKkP9
SQmJ+lOzUfs1C4iUSLQJiCZNSmVwfxLfq7JEeFvK709sfwK8PSUsar9mAZESiTYB0aRJqQzuT6ED
mgbI9hHTn4D6VFzUfs0CIiUSbQKiSZNSGdyfQgc0DZDtI6Y/AfWpuKj9mgVESiTaBESTJqUyuD+F
DmgaINtHTH8C6lNxUfs1C4iUSLQJSPVJ09yEGWH/bbNs2ZiZpvKRCTPn1rfMmYmRpC7fnu5nZGKu
W8/dx/QYaydhbFpuh8rSfeZ0lo2YiWm3PCmbY/p8P9iOdlj59FhSxtqcmxhh+2LHILQ/Nu2WJ+NF
/U3359P19nNIcH8KHdA0QLaPmP4E1KfiovZrFhApkWgTkOEkTW5iQwmLmwgQdtuYGRthSYC3rLOP
TmKSJmQp02MFCUdRH9xyrDv77taT+jSS6dt+5dqYNmNJgmMTJ6kdWvctS3VrCven0AFNA2T7iOlP
QH0qLqHtd+XKldy62i8sECmRaBOQ4SdNNmnwJDMpSDSQVGDGJjcrg/pIumhmJ9sHZqYKZoPcdqjM
14ee8rTPvA5I602n/UUZ+jw2QfrQE/rla188NmeZkMpqBvcnKaAh6J08edIcPXrUzM/Pm8OHD9vl
Y8eOmSNHjtgyLJ85c6ZHVwNk+4jpT0B9Ki5l9gOXLl3KbAj7wWZYpnV8wn4XL1609XnipPYLC0RK
JNoEZOhJUzbz4j3pswSIZqVQzurbxIRuY9G+pKQG2G3ubayETM9TTu0C3g9OVs9JBN1PV4/Xz7Uv
z6Llloke3QSxreHB/UkKaGfPnjV79+41165ds8Hv/Pnz5ubNm3b93LlztmxhYcGWHz9+3Fy+fDnT
1QDZPmL6E1CfikuZ/cCff/5pk6br169bO6EMNkQyhfWrV69akEyhTJOmeECkRKJNQIaTNEkndikR
6ClnMzW8nJbdT74fQtpWpodyqc9SvXSbfY4pqduTzIm6TpJF5XzdtyzVrSncn6SAhitGXPlz+fXr
l4UL/gNo//799qRIuhog2weElkP7E1CfiguEln1jDfvdunXL1iVx7ff27VtbD7NOXFftFxaIlEi0
CcjQZ5rKyt2HpoH0/A/qld4GA0UJRz99w3LRLJZULyv39Iu2c31LmkzxOu4yIZXVDO5PUkA7ffq0
mZ2dNT9//jTv3r0z379/tzMABw8etMtUduPGDbNjxw47W0C6GiDbR0x/AupTcSmzH8BtVNgRidKb
N2/Mly9fzObNm+0y7Pft2zfz9OlTs2/fPnPixImcrtovLBApkWgTkJonTZ1fzdnZGirzPjiOBKM7
C9RJtvLJTbAHwdEHKXHqQz+7HZlt7/RbfBDccztSbMfXdo3g/iQFNLqdgkCIgAiZm5szW7Zsscsf
P340nz59stPze/bsyabrgQbI9gGh5dD+BNSn4gKhZd9YY/YIdvnx44d5//69TXLXrVtnZ5ew/Pnz
Z/P48WNb76+//srpqv3CApESieqYNSuWT5kFWl+YMsuzyZTlZmqB15Uo0l9mlk8tFNdPgNQraWIH
4P1pPc3W4DUA7jbnWaOeWaqlvHLA0ens25k1EvvbW+72K0sKe9pns0y8TKrXUwY8s21DgvuT7ySH
hzs/fPhgdu/ebaampszq1avNqlWrzJo1a+xsAIIlnm/YuXOnJk0tJ6Y/AfWpuJTZD+C2G55Tev36
tdm4caNNmFauXGnWrl1rNmzYYB4+fGgePXpkDh06pElTZCD5pKI6FqaWd85pWRKzYKaWs0RpdgXb
1kuvfkKis2KW6iQJEku8xPoJkOqTJqW1cH+SAhqm4XEiwxXlgwcP7Oe2bdvMpk2bsrKXL1/amYGt
W7fmnkHRANk+YvoTUJ+KS5n9AG7PIXFC4nv//n3z7Nkzm/DeuXPHJkvPnz+3iRNmCvWZprhAKHkY
CpgZ8iVNuW0eCus4+wNCfYgmTUplcH+SAhqeKTlw4IB59eqVefLkiZ1637Vrl9m+fbt1WJQhSKIu
brPoTFO7ielPQH0qLmX2A3gGDXbBjCCeXcKzTOvXr7e35F68eGHtd/v2bfvruVOnTuV01X5hgVDy
MBR6khjMDtFdlT5uzxUlTdI2TZqUYcP9SQpo+LUTptnhnLiiRFDEJ4IlZgQAnkG5e/euvbLUB8Hb
TUx/AupTcSmzH6Dbc2RD2AzJLiVMmIHCJ+rh1QRcV+0XFgglD0PBSWJmVyxLb69hlihJnFbM5uu7
eJOm/K25DE2alGHD/UkKaLg9ghMdAiKm4jHtjitKBEncSsEynm3Az8PxC6gLFy5kuoUBkp4po0+p
TmiqbKsqanZMMf0JRPGpxdaPPfZD6FeZ/QCSITxzBhvCZrAhkidahv0oOcbtWK5bu5jQcCC5pKJq
eBLTk9AIt9dcxKTJkzABTZqUYcP9SQpoeLkgnkvANDtuq+BnxHimAdCJDQ/2YlYAn/KL7Dz/U+gL
kLGC5lKDMteL1cccwri5VNKP/onpTyCoTxXVL2KxehI161eZ/WAPvOkbtsEtOrITgA3xy0h8ImH6
448/rL2DxYRl7N8neH1erypq0h9ILqmomlwS07k1lz3IjW3LVphZu60z89Tzazg3CbI6BYmWJk3K
sOH+JAVJArdJ8M4VXGXihAewjDIs482/rk62PxtMPP9JKAWaWMFnqfuN1S8ftj1n3MQ6FfaphJj+
BKL41KBjWNTOoNSsX2X2owQIiRNmAclmmFHCrTis4xdzsB+9zV1MmmwfB7Wfpz6vVxU16Q8kl1RU
SPZrthSbLNmkh8p48tM7eyTpu2WAEi2xvaQcokmTUhncn4pOcouB9ofXOeCKTPyfQinQ+IIPyrMv
DX8nV/o+sBS8LiL/Cok0sAlt5upJZdkrItIr47R8ZGys20epX2kbE+lb6AG9xkJqM3ecKeK4gVx7
6T5y7UmvxegG99Jjpj4NoE99i+lPIKhP5erjBNh7rOIY5PTSfUr1kvKiscr1QSqzn9X2qx/7ubN/
Rbh1l2w/vMJG+O/P3PHkxqM7fmPT3e+w/EqZRdhtyP2BUBJSa/D6gbLnmxYJRJMmpTK4P4U+yXX2
h8CQfvmlF4OyQJPpSmVpYpRLPGyw6gSeLOhIUGBz28QnS77si1a5HvAExe6yp19236xfdOz9tGnx
jJvTXu6YeLmtx/adq+e0L/ZpAH2qkxDTn0BQn8odk3OCsnULxoB/LnKscnWlMqtfbb+aYD8kWtbP
pXqAvrP2OFk7fNnqhbHbMPsDkRKJuoFZouy2XWAgmjQplcH9KXSQtPvLBRIEhTRQ8IDgBpp+yrCO
QCLVzbbTFVt6dUZ1Mx30B9udoCjpUrm7zMsyXaFf2bqnTZecvjBubj2pnB9D1qbUvlA2kH6XmP4E
oviUuw3rOD77KYyBq+erVzJWWVs16lcj7CfVwzI/Tmm7pM91LMXjU7f+QKREok1ANGlSKoP7U+gg
if3lppVT7HQ8DxQUPIh+ymyASYKIry4FYlrnbfXosKDk0/Utu/uy+kK/3PWSwFw6blSX1kvbc5Ha
d8ZhYP1qTrrBfcrdhvWiMXD1fPUyCmwt6fr2i/XI/WqK/bCP7H9Nsa3o++7qS9tF+rfbsPoDkRKJ
NgHRpEmpDO5PoYPkhXune2+d0VR0UaAQg0cnYNC+bOC1t82E23OOvq0rtZl8jtHzFHTLwPl7nkwX
69CjgJW14elXtr1Tnq1LbdJVdhYMhWPKTeF3A3LPsVF9p18ZUvvJMff2aQB9OjkkxPQnENSnPPW7
vuUfg7zegGMFvR4/SnV4mbMter+S9ebYr3Nsku+L3wlxOaTdhtCfZB0iJRJtAqJJk1IZ3J8QJIMy
/y8nsAAEhuRLT8mJE2AsKEMAymCByi0T6iPo4DkDWs8e2qa2sjbTQEf10sAk6qZt0bZ+HwTPjquk
zc4+Ck6kNG4IljjJkL57bFzH7rPblg3cYvtFfeqW+/W7bUb1JxDSp6ieeJwePb5/+vTVKxxXyafB
EPuVUGv7uWXZhUTJ993Vd5fZWAxkN9oHUXV/EiBSItEmIJo0KZWh/qSERP2p2aj9mgVESiTaBEST
JqUy1J+UkKg/NRu1X7OASIlEm4Bo0qRUhvqTEhL1p2aj9msWECmRaBMQTZqUylB/UkKi/tRs1H7N
AiIlEm0CUpo0qaioqKioqKio9JE03bt3T1GCoP6khET9qdmo/ZqF2qszBpo0KZWh/qSERP2p2aj9
moXaS5MmpWK4P4nvVVkivC3l9ye2PwHenhIWtV+z4PZqKxBNmpTK4P4UOqBpgGwfMf0JqE/FRe3X
LLi92gpEkyalMrg/hQ5oGiDbR0x/AupTcVH7NQtur7YC0aRJqQzuT6EDmgbI9hHTn4D6VFzUfs2C
26utQKpPmuYnzSj7bxswPsPrzJvJ0aR8dNLMcz0wM57TWzY+09mfW5fKhLaWLRs1k/NpHVY+Ojmf
b0sJDven0AFNA2T7iOlPQH0qLmq/ZsHt1VYgw0maeJIjro+b8dE0uUnL5ydHk+Rm3MxQvYSZ8WTd
1QdUJm2zzJhxSp5oHQlYTz0lJNyfQgc0DZDtI6Y/AfWpuIS23927d3Prar+wcHu1FcjwkybMHrGE
BckRZn1mxvnsD2af8klUxqKTpnwCpsSH+5MU0BD0Ll26ZM6dO2fOnDljTp06ZZfPnz9vTp8+bcuw
vLCw0KOrAbJ9xPQnoD4VlzL7gX/++SezIewHm2GZ1vEJ+92+fdvW54mT2i8s3F5tBTKcpIndFstu
l9ntLDlCMkUJj9XxJDk9+0uhpEkqT/SQlNl1nWGqDO5PUkC7fv262bt3r7l27Zq5cuWKPaHdvHnT
riM4ogwBEuVnz541d+7cyXQ1QLaPmP4E1KfiUmY/ALucPHnS2hJ2wt95wIZIpLB+9epVy4kTJ2zi
pElTPLi92gpk+DNNfD23jd1Cc3U40jYqK9Ij6DkpTZ6iw/1JCmg4mR07dszWI/n165eFy/37983+
/fttICVdDZDtA0LLof0JqE/FBULLvrFGYnTr1i1bl8S139u3b62dkQhzXbVfWCBSeZuADD9pYrfK
Os8tpTNAKZ1bdO4zSIylJk0WvV1XBdyfpICGq/7Z2Vnz8+dP8+7dO/P9+3dz/Phxc/DgQbtMZTdu
3DA7duywn6SrAbJ9xPQnoD4VlzL7AdxGBUiU3rx5Y758+WI2b95sl2G/b9++madPn5p9+/aZixcv
5nTVfmHh9morkOEnTdltuM6v5nK/pGO36II+CI5yPrPkq6cEhfuTFNAwM4DbKQiECIiQubk5s2XL
Frv88eNH8+nTJzs9v2fPHk2aWg6ElkP7E1CfiguEln1jjdkjzDb9+PHDvH//3ia569ats7NLWP78
+bN5/PixOXr0qLl8+XJOV+0XFm6v4TBjxvl5GuftngkWXt/F0V9EOWQ4SRM70CwREhMXzAB1Z5h6
ZqKQ+Eh6VNbTFsD+0tca5MqYvhIF7k++k9zhw4fNhw8fzO7du83U1JRZvXq1WbVqlVmzZo2dDUCw
xG2UnTt3atLUcmL6E1CfikuZ/QASJjx79vr1a7Nx40abMK1cudKsXbvWbNiwwTx8+NA8evTIHDp0
SJOmyHB7VU127ufn+plxNsmSzxVcRP1FlEOqT5qU1sL9SQpouJ2CExmuKB88eGA/t23bZjZt2pSV
vXz50s4MbN261Z4USVcDZPuI6U9AfSouZfYDuDWH55WQ+OLZs2fPntmEFw/tI1l6/vy5TZwwU6jP
NMWF22soiBMrRMEv7Amf/gDlEE2alMrg/iQFNFzxHzhwwLx69co8efLETr3v2rXLbN++3Xz9+tWW
IUjiFzS4zaIzTe0mpj8B9am4lNnPll+4YGebMCOIZ5fwLNP69evtLbkXL15Y++FXc/Pz83ZGKqer
9gsKt9dQKEqaChOqFE2alKbB/UkKaLjSxzQ7Tmi4okRQxCeCJWYEAJ5Bwc+K9ZkmJaY/AfWpuJTZ
D9DtObIhbIZklxImzEDhE7NReA0B11X7hYXbayh4E6PiW3MZmjQpTYP7kxTQMDOAl9chMGIqHtPu
uKJEkMStFCzj2QbMHuAXUPgpMukWBkhyfu+XLgJVtlUVNTummP4EovjUYuvHHvsh9KvMfgBJE+yI
JAk2gw2RPNEy7AcbIznGjCHXrV1MaDjcXkNBtFWfCRPw2XqAcogmTUplcH+SAhqeU8AzDHjTL05k
+BnxkSNHLHiPDk5seLAXswJ4mZ38Irv0IX/u7OT80pfD94VZKkVt9gPXi9XHHMK4uVTSj/6J6U8g
qE8V1S9isXoSNetXmf1gj7///tvOIiF5gp1gLwAb4peR+ETCBFvi7eHBYsIy59dYSzjOJVOT/nB7
DQX3mO24SAlTx949v6bzjdkA5RBNmpTK4P4kBUkCt1XwzhWamgdYRhmW3RkBkO3POrrz34Xk/NKX
w/eFWSpL3W+sfvmw7fX+52NvnQr7VEJMfwJRfGrQMSxqZ1Bq1q8y+1EChGeWcOuUbIYZJXojOH4x
B/vR29zFpMn2cVD7eerzelVRk/5we1WN+8t5/GrOLQO+9zpK+osph2jSpFQG96eik9xioP3B2fHF
yf13IQUYKdD4gg/Ksy8Nfz8YvpD5L1P+C5Z+WYU2c/WksuyLnl4Zp+Wj4+PdPkr9StuYpL8GShC/
/LQPAXHcQK69dB+59lgfsnrdgFV6zNSnAfSpbzH9CQT1qVx9nAB7j1Ucg5xeuk+pXlJeNFa5Pkhl
9rPafvVjP3f2rwi37pLth/cE0vv8WL3c8eTGozt+4zPd7zB9Fwcdn4ya9Ifbq9bwcQoMRJMmpTK4
P4U+yXX2h8CQfvnZi1GzAMMCTaYrlaWJUS7xsF/CTuDJgo4EfWHdNvHJki/7YlauBzxBsbvs6Zfd
N+sXHXs/bVo84+a0lzsmXm7rsX3n6jnti30aQJ/qJMT0JxDUp3LH5JygbN2CMeCfixyrXF2pzOpX
268m2A+JlvVzqR6g76w9TtYOX7Z6Yew2zP5we9UZ+G43NoUFokmTUhncn0IHSbu/XCBBUEgDBQ8I
bqDppwzrCCRS3Ww7XbGlV2dUN9NBf7DdCYqSLpW7y7ws0xX6la172nTJ6Qvj5taTyvkxZG1K7Qtl
A+l3ielPIIpPuduwjuOzn8IYuHq+eiVjlbVVo341wn5SPSzz45S2S/pcx1I8PnXrD7dXW4Fo0qRU
Bven0EES+7NXx04gsNPxPFBQ8CD6KbMBJgkivroUiGmdt9Wjw4KST9e37O7L6gv9ctdLAnPpuFFd
Wi9tz0Vq3xmHgfWrOekG9yl3G9aLxsDV89XLKLC1pOvbL9Yj96sp9rMzF5OsftH33dWXtov0b7dh
9Yfbq61ANGlSKoP7U+ggeeHe6d5bZzQVXRQoxODRCRi0Lxt47W0z4faco2/rSm0mn+P0PAXdMpjx
6GIdehSwsjY8/cq2d8qzdalNusrOgqFwTLkp/G5A7jk2qu/0K0NqPznm3j4NoE8nh4SY/gSC+pSn
fte3/GOQ1xtwrKDX40epDi9ztkXvV7LeHPt1jk3yffE7IS6HtNsQ+pOsc3u1FYgmTUplcH9CkAzK
/L+cwAIQGJIvPSUnToCxoAwBKIMFKrdMqI+gg+cMaD17aJvaytpMAx3VSwOTqJu2Rdv6fRA8O66S
Njv7KDiR0rghWOIkQ/rusXEdu89uWzZwi+0X9alb7tfvthnVn0BIn6J64nF69Pj+6dNXr3BcJZ8G
Q+xXQq3t55ZlFxIl33dX311mYzGQ3WgfRNX9SeD2aisQTZqUylB/UkKi/tRs1H7NQu2lSZNSMepP
SkjUn5qN2q9ZqL00aVIqRv1JCYn6U7NR+zULtZcmTUrFqD8pIVF/ajZqv2ah9uozaVJRUVFRUVFR
UekjacL//ChKCNSflJCoPzUbtV+zgHz9+rXVQDRpUipD/UkJifpTs1H7NQuIlEi0CYgmTUplcH8S
36uyRHhbyu9PbH8CvD0lLGq/ZgGREok2AdGkSakM7k+hA5oGyPYR05+A+lRc1H7NAiIlEm0CokmT
Uhncn0IHNA2Q7SOmPwH1qbio/ZoFREok2gREkyalMrg/hQ5oGiDbR0x/AupTcVH7NQuIlEi0Ccjw
kqbpse5/3oCx6Wzb3MRIbtvIxFxn29yEGeHrVDYyZsZG2L4YI2NjVqdbNmIm5phubpuz3VvHT7dv
c2YCfRqZMHN8X3w9h1A/RRyPfvpeM7g/hQ5oGiDbR0x/AupTcVH7NQuIlEi0CchQkqZOEjBmplnZ
dJLcYN1uyyUO02aMJwo2QXISn6LERFqntt1tEmV1fNtteUlfOVL9hN7xSJKrsWS9rF81hPtT6ICm
AbJ9xPQnoD4Vl9D2u3LlSm5d7RcWiJRItAnIEJImzKj4ZkSQIAnbKEGgT8xS0cyUmzyUrds24idN
SHaQ6E2Psdmngn2J9X3jAfrpe83g/iQFNAS9kydPmqNHj5r5+Xlz+PBhu3zs2DFz5MgRW4blM2fO
9OhqgGwfMf0JqE/Fpcx+4NKlS5kNYT/YDMu0jk/Y7+LFi7Y+T5zUfmGBSIlEm4BUnzThZO/MMuW2
iYlAmuiw7UguxqYFnbJ1JFy0jm3uLS5et5867v4tLDF02+upCwatn24r6lcN4f4kBbSzZ8+avXv3
mmvXrtngd/78eXPz5k27fu7cOVu2sLBgy48fP24uX76c6WqAbB8x/QmoT8WlzH7gzz//tEnT9evX
rZ1QBhsimcL61atXLUimUKZJUzwgUiLRJiDDSZqKEgFxW2/SlNV1daR1X2Lh1pUoqyNtz5Wx2SLf
vvqqnz7zRMfg21eN4f4kBTRcMeLKn8uvX78sXPAfQPv377cnRdLVANk+ILQc2p+A+lRcILTsG2vY
79atW7YuiWu/t2/f2nqYdeK6ar+wQKREok1Aqk+aim45+bZRguAkCrilNTbhJA9uMsHXscxnudy6
EmV1hO32OSSeqCV0n8nq3Ze3vjQetI9++l4zuD9JAe306dNmdnbW/Pz507x79858//7dzgAcPHjQ
LlPZjRs3zI4dO+xsAelqgGwfMf0JqE/Fpcx+ALdRYUckSm/evDFfvnwxmzdvtsuw37dv38zTp0/N
vn37zIkTJ3K6ar+wQKREok1AhpA0UZKQv0XX/4PgvdsKZ4/cdfurvbTtfhKPsjo92zszQvbWIZXR
LTdxXwX1k+We8aB99NP3msH9SQpodDsFgRABETI3N2e2bNlilz9+/Gg+ffpkp+f37NmTTdcDDZDt
A0LLof0JqE/FBULLvrHG7BHs8uPHD/P+/Xub5K5bt87OLmH58+fP5vHjx7beX3/9ldNV+4UFIiUS
vx0LU2Z5NoGx3EwtdLdBhpI0gZ7ZlYJXDmQJhZQo8GeApDqCTmf/I2ZiOtnG2ukgzOwU1emjvWzG
qKc955ajWz9twx2PLIFkZR2cvtcM7k++kxwe7vzw4YPZvXu3mZqaMqtXrzarVq0ya9assbMBCJZ4
vmHnzp2aNLWcmP4E1KfiUmY/gNtueE7p9evXZuPGjTZhWrlypVm7dq3ZsGGDefjwoXn06JE5dOiQ
Jk2RgeSSi9+SBTO1nCVKsyvMsuVTZiHdDhla0qS0D+5PUkDDNDxOZLiifPDggf3ctm2b2bRpU1b2
8uVLOzOwdevW3DMoGiDbR0x/AupTcSmzH8DtOSROSHzv379vnj17ZhPeO3fu2GTp+fPnNnHCTKE+
0xQXSD7B+B1xkibMOmnSpAwL7k9SQMMzJQcOHDCvXr0yT548sVPvu3btMtu3b7cOizIESdTFbRad
aWo3Mf0JqE/Fpcx+AM+gwS6YEcSzS3iWaf369faW3IsXL6z9bt++bX89d+rUqZyu2i8skE5i8bsz
a1Zkd29qdHtOaR/cn6SAhl87YZodzokrSgRFfCJYYkYA4BmUu3fv2itLfRC83cT0J6A+FZcy+wG6
PUc2hM2Q7FLChBkofKIeXk3AddV+YYFQ8vA7M7timVkxi2XMOiWJ04rZbBtEkyalMrg/SQENt0dw
okNAxFQ8pt1xRYkgiVspWMazDfh5OH4BdeHChUy3MEDSc2Pi82ORqLKtqqjZMcX0JxDFpxZbP/bY
D6FfZfYDSIbwzBlsCJvBhkieaBn2o+QYt2O5bu1iQsOB8OTit8S5HeferoNo0qRUBvcnKaDh5YJ4
LgHT7Litgp8R45kGQCc2PNiLWQF8yi+yS99nxQNhUYCMFTSXGpS5Xqw+5hDGzaWSfvRPTH8CQX2q
qH4Ri9WTqFm/yuwHe+BN37ANbtGRnQBsiF9G4hMJ0x9//GHtHSwmLOP/zMDq83pVUZP+QHIJxm9J
59ZcZ6Ypwf6SboWZTbdDNGlSKoP7kxQkCdwmwTtXcJWJEx7AMsqwjDf/ujrZ/mww8fznnxRoYgWf
pe43Vr982PZ6//uwt06FfSohpj+BKD416BgWtTMoNetXmf0oAULihFlAshlmlHArDuv4xRzsR29z
F5Mm28dB7eepz+tVRU36A8knGL8pdX3lgNI+uD8VneQWA+0Pr2fAFZn4n39SoPEFH5RnXxz+TrH0
3WApeB1G/pUQaWAT2szVk8qyV0akV8Zp+cjYWLePUr/SNiaSYyYdek2H1GbuOFPEcQO59tJ95Npj
fcjqdYN76TFTnwbQp77F9CcQ1Kdy9XEC7D1WcQxyeuk+pXpJedFY5fogldnPavvVj/3c2b8i3LpL
th9eZyP8x2nueHLj0R2/senudzj3yhxXz92f2xfSq0F/ILnkooVANGlSKoP7U+iTXGd/CAzpl5+/
v4sCDAs0ma5UliZGucTDBqtO4MmCjgQFNrdNfLLki17mKupimfcrW/b0y+6b9YuOvZ82LZ5xc9rL
HRMvt/XYvnP1nPbFPg2gT3USYvoTCOpTuWNyTlC2bsEY8M9FjlWurlRm9avtVxPs5/2PU4K+s/Y4
WTt82eqFsdsw+wOREok2AdGkSakM7k+hg6TdXy6QICikgYIHBDfQ9FOGdQQSqW62na7Y0qszqpvp
oD/Y7gRFSZfK3WVelukK/crWPW265PSFcXPrSeX8GLI2pfaFsoH0u8T0JxDFp9xtWMfx2U9hDFw9
X72SscraqlG/GmE/qR6W+XFK2yV9rmMpHp+69QciJRJtAqJJk1IZ3J9CB0nsLzetnGKn43mgoOBB
9FNmA0wSRHx1KRDTOm+rR4cFJZ+ub9ndl9UX+uWulwTm0nGjurRe2p6L1L4zDgPrV3PSDe5T7jas
F42Bq+erl1Fga0nXt1+sR+5XU+yHfWT/cYptRd93V1/aLtK/3YbVH4iUSLQJiCZNSmVwfwodJC/c
O91764ymoosChRg8OgGD9mUDr71tJtyec/RtXanN5HOMnqegWwb4Wx1JF+vQo4CVteHpV7a9U56t
S23SVXYWDIVjyk3hdwNyz7FRfadfGVL7yTH39mkAfTo5JMT0JxDUpzz1u77lH4O83oBjBb0eP0p1
eJmzLXq/kvXm2K9zbJLvi98JcTmk3YbQn2QdIiUSbQKiSZNSGdyfECSDMv8vJ7AABIbkS0/JiRNg
LChDAMpggcotE+oj6OA5A1rPHtqmtrI200BH9dLAJOqmbdG2fh8Ez46rpM3OPgpOpDRuCJY4yZC+
e2xcx+6z25YN3GL7RX3qlvv1u21G9ScQ0qeonnicHj2+f/r01SscV8mnwRD7lVBr+7ll2YVEyffd
1XeX2VgMZDfaB1F1fxIgUiLRJiCaNCmVof6khET9qdmo/ZoFREok2gREkyalMtSflJCoPzUbtV+z
gEiJRJuAaNKkVIb6kxIS9admo/ZrFhApkWgTEE2alMpQf1JCov7UbNR+zQIiJRJtAlKaNKmoqKio
qKioqJQkTYqiKIqiKEoXV2zSpKKioqKioqKiUiyaNKmoqKioqKio9CGaNKmoqKioqKiolIox/x9K
fXeJSNP0lwAAAABJRU5ErkJggg==
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="aper&#231;u-du-cube-OLAP-sous-workBench">aper&#231;u du cube OLAP sous workBench<a class="anchor-link" href="#aper&#231;u-du-cube-OLAP-sous-workBench">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython2"><pre><span class="n">Image</span><span class="p">(</span><span class="n">filename</span><span class="o">=</span><span class="s1">&#39;Capture2.png&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[3]:</div>


<div class="output_png output_subarea output_execute_result">
<img src="data:image/png;base64,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
SUVORK5CYII=
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Aper&#231;us-des-Datamarts:-2&#232;me-partie">Aper&#231;us des Datamarts: 2&#232;me partie<a class="anchor-link" href="#Aper&#231;us-des-Datamarts:-2&#232;me-partie">&#182;</a></h1><h2 id="Sch&#233;mas-2-et-3:-Restaurants-&#224;-Paris-ou-Avignon-ayant-subit-un-contr&#244;le-sanitaire-en-2015">Sch&#233;mas 2 et 3: Restaurants &#224; Paris ou Avignon ayant subit un contr&#244;le sanitaire en 2015<a class="anchor-link" href="#Sch&#233;mas-2-et-3:-Restaurants-&#224;-Paris-ou-Avignon-ayant-subit-un-contr&#244;le-sanitaire-en-2015">&#182;</a></h2><p>Nos deux prochains cubes ont pour base le fichier csv, accessible depuis le lien suivant:
<a href="https://www.data.gouv.fr/fr/datasets/experimentation-de-la-mise-en-transparence-des-resultats-des-controles-officiels-en-restauration-commerciale-a-paris-et-avignon">https://www.data.gouv.fr/fr/datasets/experimentation-de-la-mise-en-transparence-des-resultats-des-controles-officiels-en-restauration-commerciale-a-paris-et-avignon</a></p>
<p>Celui-ci recense toutes les contrôles sanitaires officiels réalisés durant l'année 2015. Les données rendues accessibles par la mise en transparence des résultats des contrôles officiels en hygiène alimentaire des restaurants.</p>
<p>Légende des Évaluations des restaurants:</p>
<ul>
<li>30: Niveau d’hygiène « à améliorer ; mesures correctives requises » : il s’agit des établissements pour lesquels les déficiences constatées nécessitent la mise en place de mesures spécifiques (nettoyage, travaux, formation, …), mis en demeure de procéder à des mesures correctives, dont l’efficacité sera vérifiée lors d’un nouveau contrôle.</li>
</ul>
<ul>
<li>20: Niveau d’hygiène « acceptable » : établissements présentant des anomalies qui ne justifient pas l’application de mesures obligatoires par l’administration.</li>
</ul>
<ul>
<li>10: Niveau d’hygiène « bon » : établissements conformes à la réglementation ou présentant quelques anomalies mineures.</li>
</ul>
<h3 id="Preprocessing:">Preprocessing:<a class="anchor-link" href="#Preprocessing:">&#182;</a></h3><p>Le fichier récupéré du site ci-dessus nous informe du nom, de la raison sociale et de son numéro de SIRET associé, du lieu (adresse et géoposition), de la date et de l'évaluation associée.</p>
<p>Nous avons choisit de combiner ces informations avec d'autres, dans l'optique de faire une analyse par rapport à l'évaluation et la côte vis-vis des consomateurs du restaurant ayant subi un contrôle. A l'aide de python et de BeautifulSoup, nous avons pu créer deux webscrappers:</p>
<ul>
<li><p>un qui, à partir de l'adresse et de l'enseigne du restaurant, se sert du moteur de recherche de yelp.fr afin de récupérer le restaurant, ainsi que les reviews et les ratings faits par les internautes. Des informations sur les reviewers sont également récupérés.</p>
</li>
<li><p>et l'autre, qui, à partir du numéro de SIRET de l'entreprise possédant le restaurant, extrait les informations disponibles associées à l'entreprise: le capital, le type d'entreprise, etc...</p>
</li>
</ul>
<h3 id="aper&#231;u-fichier.csv">aper&#231;u fichier.csv<a class="anchor-link" href="#aper&#231;u-fichier.csv">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[16]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython2"><pre><span class="n">df2</span><span class="o">=</span><span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="s1">&#39;Datamart Evaluations.csv&#39;</span><span class="p">,</span><span class="n">sep</span><span class="o">=</span><span class="s1">&#39;;&#39;</span><span class="p">)</span>
<span class="k">print</span><span class="p">(</span><span class="n">df2</span><span class="o">.</span><span class="n">shape</span><span class="p">)</span>
<span class="n">df2</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt"></div>
<div class="output_subarea output_stream output_stdout output_text">
<pre>(5118, 11)
</pre>
</div>
</div>

<div class="output_area"><div class="prompt output_prompt">Out[16]:</div>

<div class="output_html rendered_html output_subarea output_execute_result">
<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Evaluation</th>
      <th>Nom</th>
      <th>Annee</th>
      <th>Mois</th>
      <th>Jour</th>
      <th>Ville</th>
      <th>Arrondissement</th>
      <th>capital</th>
      <th>forme juridique</th>
      <th>nombre etabl</th>
      <th>rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>20,00</td>
      <td>2 BIS CAFE</td>
      <td>2 015,00</td>
      <td>12,00</td>
      <td>21,00</td>
      <td>PARIS</td>
      <td>5</td>
      <td>7 622</td>
      <td>Soci�t� � responsabilit� limit�e (sans autre i...</td>
      <td>1,00</td>
      <td>4,00</td>
    </tr>
    <tr>
      <th>1</th>
      <td>20,00</td>
      <td>2 BIS CAFE</td>
      <td>2 015,00</td>
      <td>12,00</td>
      <td>21,00</td>
      <td>PARIS</td>
      <td>5</td>
      <td>7 622</td>
      <td>Soci�t� � responsabilit� limit�e (sans autre i...</td>
      <td>1,00</td>
      <td>3,00</td>
    </tr>
    <tr>
      <th>2</th>
      <td>20,00</td>
      <td>2 BIS CAFE</td>
      <td>2 015,00</td>
      <td>12,00</td>
      <td>21,00</td>
      <td>PARIS</td>
      <td>5</td>
      <td>7 622</td>
      <td>Soci�t� � responsabilit� limit�e (sans autre i...</td>
      <td>1,00</td>
      <td>2,00</td>
    </tr>
    <tr>
      <th>3</th>
      <td>20,00</td>
      <td>2 BIS CAFE</td>
      <td>2 015,00</td>
      <td>12,00</td>
      <td>21,00</td>
      <td>PARIS</td>
      <td>5</td>
      <td>7 622</td>
      <td>Soci�t� � responsabilit� limit�e (sans autre i...</td>
      <td>1,00</td>
      <td>1,00</td>
    </tr>
    <tr>
      <th>4</th>
      <td>20,00</td>
      <td>2 BIS CAFE</td>
      <td>2 015,00</td>
      <td>12,00</td>
      <td>21,00</td>
      <td>PARIS</td>
      <td>5</td>
      <td>7 622</td>
      <td>Soci�t� � responsabilit� limit�e (sans autre i...</td>
      <td>1,00</td>
      <td>5,00</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h5 id="Ces-donn&#233;es-sont-trait&#233;es-et-jointes-&#224;-l'aide-du-logiciel-Pentaho:">Ces donn&#233;es sont trait&#233;es et jointes &#224; l'aide du logiciel Pentaho:<a class="anchor-link" href="#Ces-donn&#233;es-sont-trait&#233;es-et-jointes-&#224;-l'aide-du-logiciel-Pentaho:">&#182;</a></h5>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython2"><pre><span class="n">Image</span><span class="p">(</span><span class="n">filename</span><span class="o">=</span><span class="s1">&#39;Capture3.png&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[5]:</div>


<div class="output_png output_subarea output_execute_result">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Datamart-2:">Datamart 2:<a class="anchor-link" href="#Datamart-2:">&#182;</a></h2><p>Le 2ème schéma concerne les données extraites par webscrapping à partir du site d'avis participatifs <a href="https://www.yelp.fr">https://www.yelp.fr</a>. Ces données concernent les restaurants présents dans le datamart précédent. Nous avons extrait les auteurs des avis (nom, nombre d'avis) , la note et la date de publication. Dans ce schéma, nous considérerons le fait 'rating' comme mesure du datamart alors que le nom, la forme juridique, le capital, le nombre d'établissements, les commentaires, ainsi que l'adresse (sous forme d'hiérarchie: Ville, arrondissement) des restaurants comme dimensions.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Il-en-r&#233;sulte-les-cubes-suivants:">Il en r&#233;sulte les cubes suivants:<a class="anchor-link" href="#Il-en-r&#233;sulte-les-cubes-suivants:">&#182;</a></h3><h5 id="Cube-du-datamart-2-avec-comme-mesure-l'evaluation-sanitaire-moyenne-avec-date--d'inspection-hi&#233;rarchis&#233;e">Cube du datamart 2 avec comme mesure l'evaluation sanitaire moyenne avec date  d'inspection hi&#233;rarchis&#233;e<a class="anchor-link" href="#Cube-du-datamart-2-avec-comme-mesure-l'evaluation-sanitaire-moyenne-avec-date--d'inspection-hi&#233;rarchis&#233;e">&#182;</a></h5>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[6]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython2"><pre><span class="n">Image</span><span class="p">(</span><span class="n">filename</span><span class="o">=</span><span class="s1">&#39;Capture4.png&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[6]:</div>


<div class="output_png output_subarea output_execute_result">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAp4AAADjCAYAAAAsVRSlAAAAAXNSR0IArs4c6QAAAARnQU1BAACx
jwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAESoSURBVHhe7Z3ZjuzEloazW+p3aKnfoKS62W+S
N3lbb8BNXSBKOn0Qg0qNENzUFVIJIYFAHHUBxTwUbNiwmeEUm/HAZp6nZtoIkCDaf6QjvBxe4SHT
Tjud/5I+pR2OybFW2H+GnVWTK6+80sD++c9/EkIIIYSQEmAXL14kDYFBc1J4EkIIIYTUBKYJK1IO
jMKTEEIIIaQBME1YkXJgFJ6EEEIIIQ2AacKKlAOj8CSEEEIIaQBME1akHBiFJyGEEEJIA2CasCLl
wCg8CSGEEEIaANOEVY6TPbM9mZjJ7DCXfjhL0rb3zIlI2xRgFJ6EEEIIIQ2AacIqB4Tn9szMtrfN
3olM206g8LQ72uASQgghhJAMmCascliRuWcO9xKhuXdi07DaOdubp1vh6VZFLZlAPUnKzNPS1dG0
Li9W3X76uYdV1MnMHDap09W1QmAUnoQQQgghDYBpwiqHF4uHZgZRGIhFnx7mt8IxSz+cibJq3kTM
HqbpTep0eVYIjMKTEEIIIaQBME1Y5RBi0b7X6QRiIBr9KqQFghDi0W0X68rta+l16+wBGIUnIYQQ
QkgDYJqwyiFFoRWEqeiLicYCQiyGeWN1NKlTPd4tMApPQgghhJAGwDRhlSMmAn36XARmj8mz47P0
ndCLF0/MHn6cdJiUEWLRvq+pCc8mdbofPK0QGIUnIYQQQkgDYJqwylEpPNNtuwKZIgSpS3M/TJI/
DtqezeZ1aG00qHPVwCg8CSGEEEIaANOEFSkHRuFJCCGEENIAmCasSDkwCk9CCCGEkAbANGFFyoFR
eBJCCCGENACmCStSDozCkxBCCCGkATBNWJFyYDnhSaPRaDQajUajdWU54ampU9IP9AdpE8YTIf3B
+Tc+YNpKKCkHRuE5UOgP0iaMJ0L6g/NvfMA0YUXKgVF4DhT6g7QJ44mQ/uD8Gx8wCKkXL365FKEw
GzswCs+BQn+QNmE8EdIfnH/jAwYhtYx4pPBMTBtc0g/0B2kTxhMh/cH5Nz5gEFIUns2AUXgOlE78
Efu/sWT0tBJPq46fWHuMY7JmtDL/yKCAQUhReDYD1lx4hv98PmF2qOQL4c2iEbX94Tkxe9uJP8rG
mD7YWGrHUzq/t/dO8mmIm6bxk9YlrxWTybbZO0mPVdUVy7Nof1bJkPtGVk7T+VeYL1peiYw3xt5K
gEFIlYnHCxcumLNnz1qwHR6n8ExMG9wCYVCnE6VSfHIyNKK2Pxx2fGdmtl1yoaIPNpba8aTFkYub
pvFTlr9OXbE8TfvRB+vQR7Iyms0/ETfYn8zMocyjwXhbOTAIKU08np6emnPnzpm///3v5j//8z8t
2EYajrl8FJ6JaYNbQAtwkXayt618W0tX49J0u5piJ1SYjzhq+yMF445xPZwpq1V+nBPgp9Rfe0ne
ibuoRfyR86fmYxcL9OegqR1PaWycHM7MZHaYT7OfEKU1/ezKFY4VrwfqdSPWXq4/8/qXitOgndlh
1j//hTpazs0jmV+53tnzJptK4/nn0w7NTAhPdZ6E8Tab5eZHMT4TcvGckGuT1AEGIRUTj3/729/M
f/zHf5h///d/t2AbaTIPhWdi2uAWKEwMkJ8cHu3mZY8F+dU6N5va/rDgwpNehDDmuXEOLjY4ll50
slXqiD9sviz9MLmgHWpp9OfgqR1Pwnf4EmNjJBcP7maX3gTL/Gzzi5sbcPnLYsRdN2Ltyf64z2Xi
1OYV80du2z6WlRPzSM49l8eVIRvNIvPP7ueu5wFunmBblquMz8h9AdukNjAIKU084tH6f/3Xf1mx
+W//9m8WbCMNx1w+Cs/EtMEtoAapuDCnwV56ownzWMSFndT3B8j5BL5Ib5yhr9y+lq76Y36ByvtG
SYuWd2VI39SOJxkbYbzIY+54mZ/D/GXHbF0ifsrac+n++JJxKtvRtuuUi5V1x8hG02j+yTgLYyh2
XIu9MAar0t0+qQUMQmothOfxrtna2jXH2rEVA2tHeMqAFisUubyxbaJS2x8J+ccvc/zrDHKc3X4s
3e0XqLix05+Dp3Y8Bb5EbM32SuImFxMBZXEhj9l6lOtGWN7mE/EWHl80TmW6tl2nXLgfK0M2koXm
H7ZlLNv9BvdXmSbTw1XUMB+pBQxCKiYeW3nUDsFor1+SLbN7rOQtYxnhKcu2IGBhLQjP+YU990gu
PZZ7FIdjfhKJMmlekqe2P9L3e3JjmXukkl2oCo8qfR0RfyT5Zv79tPRx/qGSdkJ/Dp3a8RSJDS1u
bDy5R30ahbqCY+56oNVb1p5LF59LxalsR92uUS7cx3ZOAJNNZuH5h2t51Txxx8J8YV1+H/Gc3RcK
bZJawCCkNPHY2o+L2lqpbEt4tgBsMeGJG5FHBHAC3gtzx/xLzsExvxrn60hg4Odo5I/C2IkLi71w
Bf7Qyqj+SEVHyvxHElparLyon/TKUvHkvsg09XGY35JdL+T1QL1uxNpzffR9XTJOfT2ibm27rFyY
PyF3vXN5yEayzPyzAjOdN7Xur7HrvNwX9wVL0CapBgYhVSYel/5zSjHRh/TJ1Bz4tAMzTfePd7eE
b9PVUVdPWJ/YV8v989jsbrm0idmaTrPytg/uWNqXtL7daVZmepC2lQJrLjzJSqA/SJswngjpj0HP
P4jQsicXRAUGIVUpHkuoJTy9uEtJhd9BIu68qDuYmsn0oFjepTuBKYSmPR7uO2R9Mo/fhtDN2rei
1bUj0m09Qf0wCs+BQn+QNuk2nvKrixn5pyGEbCrdzr/myJXT/DvRpC4wCKnOhacmDIEQhwdT8d5n
Kv68f1He1RPWJ/e1clqeWD1Y9dTS5X4CjMJzoNAfpE0YT4T0B+ff+IBBSPUmPO1jcDziPjBTl8cK
wECE4lj46eqQ6Vq52LZMc+kUnusP/UHahPFESH9w/o0PGIRUf8Jz/oh7ivcud4/naUF++wgc+y4d
n+Ld0MLxMB37sozPV/KoXdSj9R9G4TlQ6A/SJownQvqD8298wCCkIB6XwQkyFSv6xONvS/hYPROS
AO9+urz+x0BCAFqRGB6PlQvqrPvjIi80w/0EGIXnQKE/SJswngjpD86/8QFzYorUB0bhOVDoD9Im
jCdC+oPzb3zANGFFyoFReA4U+oO0CeOJkP7g/BsfME1YkXJgFJ4Dhf4gbcJ4IqQ/OP/GB0wTVqQc
GIXnQKE/SJswngjpD86/8QHThBUpB5YTnjQajUaj0Wg0WleWE56aOiX9QH+QNmE8EdIfnH/jA3bp
0iXSEJgqPLW/NbUs0mGkmq79AWR7ZNwwngjpD86/8QHThBUpBxYVnnKAl4WTojld+gPQJ5sF44mQ
/uD8Gx8wTViRcmAUngOlS38A+mSzYDwR0h+cf+MDpgkrUg6MwnOgdOkPQJ9sFownQvqD8298wDRh
RcqBUXgOlC79AeiTzYLxREh/cP6ND5gmrEg5MArPgdKlPwB9slm0HU+vvvpqbp/xREgczr/xAdOE
FSkHVlt4ItDPnTtnnnjiCXNycmIeffRRu3327Fnz2GOP2TRsP/vss4WynBTN6dIfgD7ZLKriCbz8
8ss+phBPiCFsu318Ip5eeuklm1/e/BhPhMTh/BsfME1YkXJgtYXnc889Zx544AFz4cIF88orr5gX
XnjBvPHGG+a1114zzz//vJ0Ep6enNv3JJ5+0eVxZTorm1PHH/fffb/2Bsce4v/nmm3a/yh+APtks
quIJPP744/bG9/rrr9u4QRpiCjdE7GOuA9wQkcYbHyH14PwbHzBNWJFyYLWFJ75pYWJUGf6V1IMP
PmiFkSvLSdEcmNuO+QMrmtL++usvizTNH4A+2Sxgbjvme8TTW2+9ZfM6C+Pp22+/tfmw+iLLMp4I
iQNz25x/4wCmCStSDqzRiieW+3/77Tcb/D/99JPn+++/N//3f/9nj2EV9M4777Srbq4sJ0Vzqvxx
/vx5c3R0ZP7880/z3Xffmd9//92ubD788MN226Vp/gD0yWZRFU8Ar2ggrnCz++abb8wvv/xibrnl
FruNeML8/vTTT+2Tj6eeeipXlvFESBzOv/EB04QVKQdWW3hKoQOh+euvv1p+/vlnKz5//PFHOzHe
fvttc++99/pHBYCTojlV/nCP2jHmuCjBjo+Pza233mq34Q/4BY9qQn8A+mSzgLntmO+xioI4+eOP
P+wcxxeXa6+91n7RxDbm+scff2zzPf3007myjCdC4nD+jQ+YJqyGy5HZObNvTuX+ZGImnjNm/1Tm
1/LtmKOq9NN9c8anT8yZ/dM0/xxYbeGJR7tYTYOYgZC56qqrzP/8z/+Y66+/3vz3f/+3+cc//mEn
yHvvvWfFDx+1L0eVP9wK9A8//GDuueces7+/b6644gpz+eWXW99glRP+wPtCd911F4XnhlMVTwCP
8PDe2Ndff21uuukme9O77LLLzNVXX21uvPFG8+GHH5qPPvrIPPLII7zxEdIAzr/xAZOCasic7p+Z
C8GC8JRCUudoZ2J2jubbtp6do9L0S0c7Pn3eRl7QwmoLTwgdLPFDzCD4JZgQ+Cb25Zdf2h+03H33
3VzxXJIqf2AFGuIS34w/+OAD+3n77bebm2++2afBH1jxvO2223JfBAB9sllUxRPAoz7c/PBl5v33
3zefffaZ/RLz7rvv2nn++eef27mOL558x4yQ+nD+jQ+YE1NrAVYiGwvPII+vI5ae7ntOzf6ZJYQn
hA5WNfG+CSbEF198kQOTAul4p/C+++6j8FySKn/gnc2HHnrIfPXVV+aTTz6xj2Eg+O+44w7rXKTB
J8iLR/Bc8dxsquIJ4B1hxAm+XOJdMsx1PNHAl0o3x9955x37q9pnnnkmV5bxREgczr/xAcsE1hqg
Cs/4I/EsjxSnbj+W7vZTFEEKa7TiiW9kKAiBidU0CSYFvqlhpe1///d/+ah9Sar8gVcf8MjF+QMX
JnziguV8gtci8OoDviHzx0WbTVU8AfeoT85xfIFxNz3Mb3wiH/7siyzLeCIkDuff+IDBV2tDdFUS
QDhq73guIzz1OmGNhCdWPTEJ8BgAS/8Qme5RO/5sD1bf8G0M7xzWXvE83jVbW7vm2H1qeTaQOv6A
+HT+cK874EIFv2Ab7wrhTynh3dwXX3wxV35wPhmj/wd0TlXxBHBDwzvBiCnEEGIKN0C3jXhyX3hw
LZBlO4mnVY9frL0B+XElcNxbZy3nHykFJgXV4CkVnsVH4nMCQenriKWn+xHRCWC1hSf+ADneK8ES
P4QMflGNP+kAYYNHvtjGo178kAX59D9ue2x2tyZmIoO/bFIgTSwFg+mBOB6jrQnWY/tN/IHxx/u3
WJEGTmzix0dY7cSn9AdYyidtjG1IWZt1kOW66mMOZdxCVtKPelTFE+ID/xEFsYIvjS5uAGIK8x2f
uOnhVRrEX5tzfGv3OJ8Wy19GWpecr5PJltk9To9V1RXLs2h/VknTviE/x315avZt6POv4DeZR0PW
VXMMFmLA/YOFomrQhOJQ/ggIx7yQhAjNHr03/nGRrUsXnQBWW3g68MgWIhPfziB68F4KwDbS3L/z
kvj6bABMzXRLBI8LCi04wjTsJ8FXKf60uhahx/YX9YfzA9Kwjf9woZVrzSdtsWy9XfUrhm0vGDc1
zwr7VEJVPLmbGOYvVsddDGFlBY/1sI9f0iKe3H/BUm982ri4cdDGo2n+Msry16krlqdpP/pgobHi
uC9NzT4Oe/6JNOxPpuZA5tHQ6uqCAfcPpgmrIeJ/1Z5iBaMViEGazR+uVmLf5QsfrxfTw7aAfH8U
1lh41kFOCODqO97dst+wD6bim7YLEC1QKtJQX3ZybqKl3/jSdNsOyhTyBeW1IO2x/Tb9odGqT1y6
P0d5YTgwU58+F+3quCltauNTa8yn06yPWr/SNnaTc3Zl3JeJMp9I1HEDufbSOnLtiT74fOUxofap
QXmk14mncN6W0focP5iayfRAyY+baPE8VbT6LcU5mRunXAwq7eX6M69/KT8F7UwPsv75L7XRclrc
Vpyf64vEnQvHPd1Gf8vKLTfug59/Pg3X6+z6rfordr2NjlMCjqVplrTN2Hh5Btw/mBNTo+JoJ1u9
7ABYJ8IzZF4fgiENDFzsnBNdYBUCTByTaUHgebQLqD0W5JftifSDJDgLdfbYfpf+AO37JJvEdrLa
sZhfAPzk1nDjFraJzyr/xMbcb0f6ZesW/XLnXqdNS2TcgvZy5yTTm8SE2qfmMbUO8YSbpR2j3Pm4
m0nqv7C8xOYXNw/g8mttO2QMau3J/rjPpf0kxklu2z6WlVPiVuZx25E48Ij8HPfux30d5p/dl+VC
cKzseotPdZwwriI9l18fL49sBwyofzBNWK07WLHMVj/bB7Y64SkDwTo6nSDSyf54ipYmLw42MCou
dmEeC8rPgy2/OhfQY/td+gO06pMwDfs4Ly2vPy7GQ7bly0TGRyvr0sNtmebLKv3y+zViAuTKK+MW
5tPS5Tn4NrX2lbRG5eesRTyF+cL82FfOzRPmLztm6xLjV9aeS/fHl/STbEfbrlMuVtYei8eBRysb
fsq8deuqOmbrEudV1p5L98fXd9wHPf/k+dY9LuuK1V+VXjdOtfarjss23bZMq5Ne0T+YJqxIObCV
CU/7LVYGSIJ9FBBzPihLw6ebWGHe2LZKSXBpZV0aPjtsv0t/gE58IvdxPrG82riFn76MGJ9Y2dh2
WJctr/Qr3K+44FSOm8vr9ivbC9HaD8ahYfl1iSfUMd2N5Md+xCf+eFi/dszWUxKDsowc7/D4on6S
6dp2nXLhvlpG619KkJ/jrrWTEqbH6vEU+7cW8w/bckzt/pLXW+yHq5Rhvrpxiu0B9Q+mCStSDmxF
wvN88ZGrc3YsKEAkAGw9wTE76dw+jvkgEWXSvK7uKSal3RePKGTZPtpPj3fpD9CeT0D+HO1Y2Ece
OK+gjaC8H7ewzeSzMD4HkbLYR7mC3yL98sfn6X5fazOMCe2cco9sMj8Wzs3lbxITyTkX+9Q8ptYn
nubnpo1bFlcub4BWvzwWmdcxPxXiRXwu6yffjrpdo1y4j21xfmocBHlydXHck+2Oxj3ZX5v5hzJV
/nLHwnxhXX4f45qNhczfOE6H0L+0PEwTVqQcWFR4tsrJlXmHW1JnOzERBgVAGi6Gnrzj8W6S/2Y3
FT8oEcf8Nz5fR4LNN7/I+PIuwGxeEbAiz0raT+nUH6A1n2hjlaYp+XFhVMfNteXb1Men1pjLdK1f
vg3Rx5I253VEylrScUNs2Atj0A+tjK0zayseE2V9ytKrYmrQ8RSmyRumOJ/5OYp8IWF+SzZn5ZyM
xqAvl+Dac330fV3ST74eUbe2XVYuzJ+QnV9ywxRl830piWOOe3W5MH9C5bgnrNP8swIu9Z/qrzSf
P+/YdU7ui+uixaaX+S4ep733LwWmCStSDkwVnqR/6A/SJownQvqD808AkVe2gt43NfsH04QVKQdG
4TlQ6A/SJuOKp/xKREa2yka6gOO+KOOaf82RK5O5J2IDYZH+wTRhRcqBUXgOFPqDtAnjiZD+4Pwb
HzBNWJFyYBSeA4X+IG3CeCKkPzj/xgdME1akHBiF50ChP0ibMJ4I6Q/Ov/EB04QVKQeWE540Go1G
o9FoNFpXlhOeFy9eJAOB/iBtwngipD84/8YHfboYsKWFp/o3xVpAa2uTkP7QxqcNZHtk3DCeCOkP
zr/xIX1K6gNrRXhq6cvASVS8UMljbcAx3iwYT4T0B+ff+JA+JfWBUXgOFOkPjjFZFsYTIf3B+Tc+
pE9JfWAUngNF+oNjTJaF8URIf3D+jQ/pU1IfGIXnQJH+4BiTZWE8EdIfnH/jQ/qU1Ac2COH53nvv
5fY5iXihIu3SdjxxzhJSH86/8SF9SuoD60x4/utf/zIvv/yyef75580zzzxjnn32WfPCCy/4fXye
np6ad955x+aXE4mTqPpChfFy44uxdWOKMT5//rwfb4xxWBZwjDeLqngC2pzFttvHJ+csIc3h/Bsf
0qekPrDOhOdzzz1nzp07Z15//XUrgPCX/t944w07sbD/2muvWZ566ik7kTiJ8kh/aOOBcb3//vvN
hQsXzKuvvmrH9M0337T7uEAhDRcppMMX7777bq48x3izqIonoM1ZxBTnLCHLwfk3PqRPSX1gnQlP
TBQIzTL79ttvzdmzZ61QkmU5iaovVBCYGDtpf/31l0Xa+++/bx588EF7MZPlOcabBcxtl83Zt956
y+Z1FsYT5ywhzYG5bc6/cQDT0kk5sE6FJ1bcfv/9d/P999+bn376yfLDDz/YyfPbb7+ZTz/91Dzw
wAPmpZdeypXlJKq+UGFsj46OzJ9//mm+++47O85PPvmkefjhh+22S4P4v/POO+2nLM8x3iyq4gng
FQ2Am90333xjfvnlF3PLLbfYbcQT5ywhi8H5Nz6kT0l9YJ0JT/eOCoQRxOavv/5q/0E8xOePP/5o
9z/77DPz+OOP28fCsiwnUfWFCiueeNSOixEuSrDj42Nz66232m2MMcYaj2ruvfdeCs8NB+a2Y77H
Kgq+MP7xxx/2yyK+uFx77bX2iyK2f/75Z/Pxxx+bJ554wrzyyiu5sownQuJw/o0P6dP14NDMtvfM
idyfTMzEs232TmR+Ld/MHFaln+yZbZ8+Mdt7J2n+ObDOhCcmESYHJs1NN91krr76anPdddeZa665
xtxwww3mgw8+MF9++aUVS3xsUET6QxsPCM9HH33Uivp77rnH7O/vmyuuuMJcfvnl5qqrrrKrnBh7
PGK/6667KDw3nKp4Arjp4Uvg119/becsbnqXXXaZnbs33nij+fDDD81HH31kHnnkEd74CGkA59/4
kD4dOid723MhWBCeUkjqHM4mZnY437b1zA5L0y8eznz6vI28oIV1JjwxiSAosRrnJowD+xCd+MEL
xBMnURHpD2088Kgd4hLfjCHi8Xn77bebm2++2adhjLHiedttt1mhKstzjDeLqngCeMyH98fwZQbv
BuOJBL7EYJ5i3n7++ed27mIFnV8WCakP59/4kD5dC7AS2Vh4Bnl8HbH0dN9zYva2Vyg88ZgdjwQg
gvBeyhdffOHBBAL4VR7eS6TwLCL9oY0HVjIfeugh89VXX5lPPvnEPoa5++67zR133GFfaUAaxhi/
jMSqMlc8N5uqeLLpL75ovzBipRxzFu+WXX/99fbxnpu3+DXtyckJX48hpAGcf+ND+nQtUIVn/JF4
lkeKU7cfS3f7KYoghXW64olVObwgjW9uWH0DbgJhJRSi6bHHHrMTTpblJKq+UGEFE49cIDIxvhhX
fOKC5cYa73hC3PMdT1IVT8A96nMxhRjCFxg3Z7ESg0+syuBPvMiyjCdC4nD+jQ/p07UguioJIBy1
dzyXEZ56nbBOhSdW5TBp8NgXjwjwiUcGOI50TJ777ruPv9BTkP7QxgNji1VlXJzwWAbji2/GuFBh
nLGNd4WwKopfuuPPdMjypWPsArQ0UFtmlW2tigGdU1U8AW3O4gbothFPiDl84cFKuizbSTytevxi
7Q3IjyuB4946azn/SCnSp2tBqf+Lj8TnBILS1xFLT/cjohPAOhGeWGV7++237TczTCasuOFdTuxj
G4/X8Sch8KMYrHjiHZbCH8PFiajLwDghlx4q7PR4YQCyeuK/3BoW0h/aGGPM8E4Q/noAxCXGE2MJ
8Hc7ITYx5hhv/MFhOb4gqxMBl4yLHDMXRFqgamltUNZmHWS5rvqYQxm3kJX0ox5V8RSbswAxhb+g
gE/c9BBb+C8rhTlrtxeIp2Re5h7zlOUvI60rm+sgne916orlWbQ/q6Rp35Cf4748Nfs29PlX8JvM
oyHrqjkGCzHg/kmfrgXhOMgfAdlxdnpqHkPu2tD4x0W2rrifYJ0JT3zifRQ84sVEwqom3uXES9F4
nIDH6/h25/IWJlHkl1HRk3X7CM5ckKGsJlCHjfSHNsYOPHLH2GKMMa7AjTe2w5VOh6/TBmMy1vLb
jgvQMFDlMZnWBsvW21W/Ytj2gnFT86ywTyVUxVNszmJlxf3nFMxfxBO+9MgyYLl4apC/jLL8deqK
5Wnajz5YaKw47ktTs4/Dnn8iDft17pdaXV0w4P5Jnw4dr41SrIayYxmk2fyZ3sr2XT459np62BaQ
X3BhnQhPICdFFWHeYp1Q4BiIQERqwVVIG7fwXBRXJ4IEQQFB74PDjWGt8RXpPtBiwTkP7nxgpgGu
tJnLp6X5yZF+y0/Tt2ezrI9av9I29pJzdmVyX2ZcfleHgjpuINdeWkeuPdEHny+b5JXn7PrUoDzS
68RTG3NWHZf0/EvjKfmimfvG7PPjJlo8TxWtfksQH0m/cuOUi0GlvVx/5vUv5aegndlh1j9/8Y+W
0+K24vxcXyTuXDju6Tb6W1ZuuXEf/Pzzafn7peqv2PU2Ok4JOJamWdI2Y+PlGXD/pE9HhbwmdACs
M+G5DIU6ffCFIlIRlWqgZgHlJ+PAkf7obowxQdPJimBz4+bGsDCW4phMS8fYTWI7WW3gzi8AfnJr
uCAP28Sn8O1hcvHI+RloN83cdqRftm7RL3fuddq0RMYtaC93TjI9jNtcvqB9tU8Nyqfb6xBP/mlG
7nzczST1X1heYvNncz13s9DadsgY1NqT/XGfS/tJjJPctn0sK6fErczjtiNx4BH5Oe7dj/s6zD+7
L8uF4FjZ9Raf6jhhXEV6Lr8+Xh7ZDhhQ/6RPxwTmnx+LDoCtgfBEULiLUnBhKOwnyIArIOsaNtIf
nY1xbqzE2MiJF45lnTTswy9aXn88uEm5vL4M+oPjin/Dsi493JZpvqzSL78faTMkV14ZtzCfli7P
wbepta+kNSo/Zy3iKcwX5se+cm6eMH/ZMVuXGL+y9ly6P76kn2Q72nadcrGy9lg8Djxa2fBT5q1b
V9UxW5c4r7L2XLo/vr7jPuj5J8+37nFZV6z+qvS6caq1X3Vctum2ZVqd9Ir+SZ+S+sAGLjzF5PH7
IgjCgImlecQ3QvX4cJD+6GqM7cqCnLQJdkU4NiFBnTTsaxdsf0z4wOUJP30ZMfljZWPbYV22vNKv
cL/iglM5bi6v269sL0RrPxiHhuXXJZ7st+29SH7sR3zij4f1a8dsPSUxKMvI8Q6PL+onma5t1ykX
7qtltP6lBPk57lo7KWF6rB5PsX9rMf+wLcfU7i95vcV+uEoZ5qsbp9geUP+kT0l9YMMVnnC+DKoU
/1go2bYTzS2tO8KgSYIqt4SuBfcAkf7oZozPFx+DuwnoxrAwARO0tHRiFv2iPGoPytu8WpvJ58y/
FpF+YTiMlMU+yjnf+jYi/fLH5+l+X2sT8Sfr1s4p98gmi9nCubn8Qb88WvvJORf71KB82pf1iaf5
uWnjlsWVyxug1S+PFeJjfizmp0K8iM9l/eTbUbdrlAv3sS3OT42DIE+uLo57st3RuCf7azP/UKbK
X+5YmC+sy+9jXLOxkPkbx+kQ+peWlz4l9YG1Ijy7wAYRLoSC+fuZ6QXSkgZWSljGTkIEUZgmygwV
6Q9tfJbm5Mr8JLSkE9AJvHCigmA8cxeBME3Jj/HHlwe3H774nbUp/ex8HymbtuWO1f1xkX4BEvW7
i46tI1LWIi5c9sIY9EMrY+vM2ppfMLX2y/qUpcfLz9sbdDyFafKGKc7H31RihPkt2c3Cx0cyLtEY
9OUSXHuuj76vS/rJ1yPq1rbLyoX5E7LzS26Yomy+LyVxzHGvLhfmT6gc94R1mn/z++jcf6q/0nz+
vGPXObkvrosWm17mu3ic9t6/FOlTUh/Y0sKTdAP9QdqE8URIf3D+CSDyylbQ+6Zm/+jTxYBReA4U
+oO0ybjiKb8SkZGtspEu4LgvyrjmX3PkymT4pHIILNK/TffposAoPAcK/UHahPFESH9w/o0P+nQx
YBSeA4X+IG3CeCKkPzj/xgd9uhgwCs+BQn+QNmE8EdIfnH/jgz5dDFhOeOL/wpJhQH+QNmE8EdIf
nH/jA3bp0iXSEBiF50ChP0ibMJ4I6Q/Ov/EB04QVKQe2cuGp/g2yJdHaWXekP7RzbgPZHhk3jCdC
+oPzb3zANGFFyoH1Ijy19EUZ64ST/ujiHHmh2iwYT4T0B+ff+IBpwoqUA6PwHCjSH7xQkWVhPBHS
H5x/4wOmCStSDozCc6BIf/BCRZaF8URIf3D+jQ+YJqxIOTAKz4Ei/cELFVkWxhMh/cH5Nz5gmrAi
5cDWTni++uqruf2xTjjpD16oyLK0HU+bMg8JaQPOv/EB04QVKQc2COH58ssvm3PnzpknnnjCPPro
o+bk5MScPXvW7+Pz2WefNS+99JLNLyfdWCec9Id2jhgDN2YYLzdOGLfHHnvMjyHGLSwLeKHaLKri
CWjzENtuH5+bNg8JaQPOv/EB04QVKQc2COH5+OOP2wn3+uuvmxdeeMGmvfHGG3YiYv+1116zYCIi
jcLzn+a5554z999/v7lw4YIdD4zTm2++afeff/55m3Z6emrTn3zySfPKK6/kyvNCtVlUxRPQ5iFi
apPnISFtwPk3PmCasCLlwAYhPLEyB6FZZt9++61fBZVlxzrhYG5bO0d888V4SPvrr78s0vAvqh58
8EErVGV5Xqg2C5jbjvke8fTWW2/ZvM7CeNq0eUhIG8DcNuffOIBpwoqUAxuM8MTq3O+//26+//57
89NPP1l++OEHO9F+++038+mnn5oHHnjAPPXUU7myY51w0h/aOZ4/f94cHR2ZP//803z33Xd27LCy
+fDDD9ttlwZBf+edd9pVUFmeF6rNoiqeAF7RQFzhZvfNN9+YX375xdxyyy12G/G0ifOQkDbg/Bsf
ME1YkXJggxCeeH8FK3gQURCbv/76q+0gxOePP/5o9z/77DP7KOKZZ57JlR3rhJP+0M7RPWrHxQgX
Jdjx8bG59dZb7TbGDeOHRzX33nuvf3Tj4IVqs4C57ZjvsYqCOPnjjz/sF0B8cbn22mvtlz9s//zz
z+bjjz+2+Z5++ulcWcYTIXE4/8YHLBRVw+bI7JzZN6dyfzIxE8fOkcgrON03Z3y+M2b/tCLdE7Y3
BzYI4YmJhHcQMcFuuukmc/XVV5vrrrvOXHPNNeaGG24wH3zwgfnyyy+tsEJeWXasE076QztHCE8I
dgj1e+65x+zv75srrrjCXH755eaqq66yq5wYT7wvdNddd1F4bjhV8QTw5AHvjX399dd2HuKmd9ll
l9n5eOONN5oPP/zQfPTRR+aRRx7hjY+QBnD+jQ+YFFRD5nT/zFwgSiF4tGN2jlyeU7N/RhOPQXpS
Zl5HLH2+r7aXAhuE8MSEw6NgrNy5yeXAPkTnu+++a4XWpkw46Q/tHPFIBuIS34whzPF5++23m5tv
vtmnYdyw4nnbbbfxHc8NpyqeAB71YS7iy8z7779vnzLgSwzmHubi559/bucjVtA35QsgIW3A+Tc+
YFJQDR6sUCpCcA5WP3fMUSE9EJi+jlh6uh9LS4ANQni6PxsBwYR3WL744gsPJht477337DuMFJ5z
INQfeugh89VXX5lPPvnEPoa5++67zR133GGdizSMG/JipZgrnptNVTwBzC/ECVbKMQ/xbtn1119v
H++5ufjOO+/Y+bopr7wQ0gacf+MDJgXV4FGFIAQkHpVrotMhH8nLVdFYesrQhSe+5eHHRXiZGt/y
sFIH3GTDSigEFr4RYnLKsmOdcNIf2jninVg8coEjMWYYK3ziguXGD+94QrDjGzJ/XLTZVMUTcI/6
XEwhhvAFxs1DrMTgE/nwZ19kWcYTIXE4/8YHzImptSAiBOdARCriMeFoZ5I+kk9FavouaCzdsw7C
E+8iYoLhETEeJ+ATjxfw54CQjr9bdt999/FX7Sl4dA7xibHBYxmMGb4Z40KFscM23hXCn1LCL91f
fPHFXPnScTveNVtbu+bYfWp52maVba2KAZ1TVTwBbR7iBui2EU/uCw9e9ZBlO4mnVY9frL0B+XEl
cNxbZy3nHykFJgXV4CkVnlJICgpl0kfsR5F0KVyHLDzxDQ//iQHvb+IxA1bnsI1JiG2scOLPR+AH
NBBRyA/y9R2YqV/yTZge+OPrivSHdlHBj7HwegIeueCRO8YIK8LAiU2MoxtPOWYgq/PY7G4lYyYv
SGUXqq4uXsteHGW5rvqYQxm3kJX0ox5V8RSbhwAxhb+ggE/c9PAFEPFXnIfYXiCekjm7tXucT4vl
LyOty18HLFtm9zg9VlVXLM+i/VklTfuG/Bz35anZt6HPv4LfZB4NWVfNMViIAfcPJgXV4AmE4On+
TvDY3AnH+Qrmmf3TNF0IUtRhH8vH0tN9lzZk4YlPTDqsykFwYlUT73I6YeXefXF5CxPuYGqmB65O
TLyawTlgpD+0C5UDj9AxXhg3jBVwY4htrBRr5XyddlIm4yfHzE1UbcJ2NImXrrerfsWw7QXjpuZZ
YZ9KqIqn2DzEygoe62EfcxLx5P4Llnrj08bFjYM2Hk3zl1GWv05dsTxN+9EHC40Vx31pavZx2PNP
pGF/MjUHMo+GVlcXDLh/MCmohoz/lXmKFYz4JXqYZvMHj92tqHT5aqTH2kuPwXoXnkBOoCrCvMX6
sPpZIzAHjvSHNmbL4uo83t2yqx4HU7H64SatNnljE9peEFygyfHPr0bjCwLadPuFlRFRfy6flua/
/abf8tP0rek066PWr7SN3eScXRn3xUVrM3eeKeq4gVx7aR259kQffL7sJlF5zq5PDcojvU48tTEP
1XFJz780npIvj/5JRS4/bqLF81TR6rcE8ZH0KzdOuRhU2sv1Z17/Un4K2pkeZP3zX6Cj5bS4rTg/
1xeJOxeOe7qN/paVW27cBz//fFr+/qn6K3a9jY5TAo6laZa0zdh4eQbcP5gTU6MCgjT2Nz1bADYI
4bkMWX0u2KToWV+kP9oeMzCvE2OWTlbcgNzEcpO9MOnFMZmWiks3ie1ktTezuU/85NZwN76wTXwK
Xx4kF4+CX7WbZm470i9bt+iXO/c6bVoi4xa0lzsnmR5cPPP5gvbVPjUon26vQzzhZmnHKHc+7maS
+i8sL7H505uEw+XX2nbIGNTak/1xn0v7SYyT3LZ9LCunxK3M47YjceAR+Tnu3Y/7Osw/uy/LheBY
2fUWn+o4YVxFei6/Pl4e2Q4YUP9gmrBad7BaKVco2wY2IuHpQBBlF7F1RfqjswuVnJxy3OTE88dT
6qRhHxNWy+uPBzcpl9eXmV8MCl8ktLIuPdyWab6s0i+/H2kzJFdeGbcwn5Yuz8G3qbWvpDUqP2ct
4inMF+bHvnJunjB/2TFblxi/svZcuj++pJ9kO9p2nXKxsvZYPA48WtnwU+atW1fVMVuXOK+y9ly6
P76+4z7o+SfPt+5xWVes/qr0unGqtV91XLbptmVanfSK/sE0YUXKgY1QeOKbifj2sqZIf3R1obIr
C3LSJtjHM7EJCeqkYV+7YPtj4ouByxN++jJi8sfKxrbDumx5pV/hfsUFp3LcXF63X9leiNZ+MA4N
y69LPKGO6W4kP/YjPvHHw/q1Y7aekhiUZeR4h8cX9ZNM17brlAv31TJa/1KC/Bx3rZ2UMD1Wj6fY
v7WYf9iWY2r3l7zeYj9cpQzz1Y1TbA+ofzBNWJFyYKMQnse70yz4bJCIYFxTpD+6uVCdLz4GdxMw
NlGBlpZOTFeXvQDaRx7Ko/agvM2rtZl8Tt07Su4R0kGkLPZRzl0YfBuRfvnj83S/r7WJOJJ1a+eU
e2STxV7h3Fz+oF8erf3knIt9alA+7cv6xNP83LRxy+LK5Q3Q6pfHCvExPxbzUyFexOeyfvLtqNs1
yoX72Bbnp8ZBkCdXF8c92e5o3JP9tZl/KFPlL3cszBfW5fcxrtlYyPyN43QI/UvLwzRhRcqB9SI8
22YejPNveKBw4VhDpD+0c16akyvzk9CSTkAn8MKJCpAmxjp3EQjTlPzwDVak3X744nfW5vwm4POl
FwC1bNqWO1b3x0X6BUjU7y46to5IWYu4cIlYLJybLGPrzNqaXzC19sv6lKXHy8/bG3Q8hWnyhinO
x99UYoT5LdnNwsdHMi7RGPTlElx7ro++r0v6ydcj6ta2y8qF+ROy80tumKJsvi8lccxxry4X5k+o
HPeEdZp/VsCl/lP9lebz5x27zsn94B4993GZ7+Jx2nv/UmCasCLlwFYuPEk96A/SJownQvqD808A
kVe2gt43NfsH04QVKQdG4TlQ6A/SJuOKp/xKREa2yka6gOO+KOOaf82RK5O5J2IDYZH+wTRhRcqB
UXgOFPqDtAnjiZD+4PwbHzBNWJFyYBSeA4X+IG3CeCKkPzj/xgdME1akHBiF50ChP0ibMJ4I6Q/O
v/EB04QVKQdG4TlQ6A/SJownQvoDdvHiRTIi6NPFgFF4DhT6g7QJ44mQ/oBpN2GyvtCniwGj8Bwo
0h/q321rAdkeGTeMJ0L6A+ZuvNrcaQN5cyfdI31K6gOj8Bwo0h+4qMhjbdBFnWS4MJ4I6Q+Yu/F2
IRK7qJOUI31K6gOj8Bwo0h8UCmRZGE+E9AfM3Xi7EIld1EnKkT4l9YFReA4U6Q8KBbIsjCdC+gPm
brxdiMQu6iTlSJ+S+sBGIjwPzFT+D9bK9OEj/UGhQJaF8URIf8DcjbcLkdhFnaQc6VNSH9jaC8/j
3a35v7kKBGYsfV2Q/qBQIMvSdjy9+uqruX3GEyFxYO7G24ZIfO+993L7bdRJmiF9SuoDG8eK5/Gu
2dIEZix9DZD+0G7quPGfO3fOPPHEE+bk5MQ8+uijdvvs2bPmscces2nYfvbZZwtlAYXCZlEVT+Dl
l1/2MYV4Qgxh2+3jE/H00ksv2fxSfDKeCIkDczfemEj817/+Zefg888/b5555hk711544QW/j8/T
01Pzzjvv2PxSfMbqJN0hfUrqA6PwHCjSH9pN/bnnnjP333+/uXDhghUAuEC9+eabdh8XKKThIoX0
J5980rzyyiu58hQKm0VVPIHHH3/cCs/XX3/dxg3SEFO4GWL/tddes0CQIo3Ck5B6wNyNNyYScU0P
598bb7xRmH9PPfWUFZ8Unv0ifUrqA6PwHCjSH9pNHd+GsaIp7a+//rJIg6MffPBBe1GT5SkUNguY
2475HvH01ltv2bzOwnj69ttvbT6sfsqyjCdC4sDcjTcmEiEuITTLzM0/LC7IsrE6SXfAtHRSDozC
c6BIf2g39fPnz5ujoyPz559/mu+++878/vvvdmXz4YcfttsuDReyO++8016oZHkKhc2iKp4AXtFA
XEFsfvPNN+aXX34xt9xyi91GPP3222/m008/NQ888IBddZFlGU+ExIG5G29MJEJ44ikVrtvff/+9
+emnnyw//PCDFZxy/uF1F1k2VifpDulTUh8YhedAkf7QburuUTsuRhAFsOPjY3Prrbfa7R9//NFe
tPCo9N577/WPbhwUCpsFzG3HfI9VTMTJH3/8YW98uAFee+219qaH7Z9//tl8/PHHNt/TTz+dK8t4
IiQOzN14YyLRvdeJxQSIzV9//dVcunTJXsdxPcf+Z599Zl+JwWsusmysTtId0qcbycme2cYPuFO2
907SY4dm5tNn5jAoB1t74el/vZ4yPShPXxekP7SbOoQnfvCBC9Q999xj9vf3zRVXXGEuv/xyc9VV
V9lVTggGvC901113UXhuOFXxBPAIDze0r7/+2tx0001WdF522WXm6quvNjfeeKP58MMPzUcffWQe
eeQRCk9CGgBzN96YSMRTKbyLj+s25h/m3XXXXWeuueYac8MNN5gPPvjAfPnll3aBgY/a+0f6dCM5
nJnZoduH2Nw2eycXzeFs4tNP9rbNZHaYlUmAjWPFc4RIf2g3dTwShbjEyhQuSPi8/fbbzc033+zT
cJHCiudtt93Gdzw3nKp4AnjUDvGJLzPvv/++XV3Bl5h3333XCs7PP//cik+soPMdT0LqA3M33phI
xOIABCWeYLkveQ7s43qOuYgFBwhUWTZWJ+kO6VNyYva2ITwhQMUqJ1ZFt/fMicgLo/AcKNIf2k0d
F6iHHnrIfPXVV+aTTz6xj0Hvvvtuc8cdd9jHM0iDUEBefEPmiudmUxVPAO8II06w4oJ3yfBu5/XX
X28fr3/xxRc2nvBrWvyqHY8FZVnGEyFxYO7GGxOJeMyOL3RYOMD8w5xzYO4B/JLd/ZUSWTZWJ+kO
6dONxwvMQHgW9ik8B430h3ZTx0UKjzwhMrEyhYsTPnHBwjdjgHeDcKHCChWEqixPobBZVMUTcI/a
XUwhhvAFxt34sBKKT+TDn32RZRlPhMSBuRtvTCTiSx9+XIQf9bn5B9z8w0ooFhrwZOLFF1/MlY3V
SbpD+nSzyR6zF4UmhedaIf2h3dTx6BziExclPBbFoxisTEEo4DE7tvGuHv6UEn7pjguVLF8qFNyP
slb546w1/iFYlAGdU1U8AQhKvBOMmEIMIaZwA3TbiCf3hQevesiyncTTqscv1t6A/LgSOO6tA3M3
3phIhPAM5x8+8agdx5GOv+l53333NftVu1uNUh57ksWRPt1cpOh0+3zUvrZIf2g3dTxqwWMZPPLE
I3f8iQ18EwZObOJdIKx24lP+sW+Q1Xlsdrcm+X8t6i742oW/q5tBWZt1kOW66mMOZdxCVtKPelTF
E+IDNzPECm6ALm4AYgp/QQGfEJ248SH+ZEwtFU+TidnaPc6nxfKXkdYlf1Q4mWyZ3eP0WFVdsTyL
9meVNO0b8nPcl6dm32DuxquJRDyZevvtt+2XPzn/sI9tPF7HNR4/JMU8xLue+h+Qx7t2yfjLm32Z
8ERazm9SRJQg69LqbYsB90/6dCOxvin6gz8uWmOkPzSh4MAjdPxNRVygIEIBtpGGbXxD1sr5Ou2F
c2qmW+mNwqdFLvhd3QSWrberfsWw7QXjpuZZYZ9KqIonJyIhPrE67mIIK5t4rI59/JId8QTRKcuA
5eKpQf4yyvLXqSuWp2k/+mChseK4L03NPsLcjTcTiRlOROIdavztZYhPzEXMNVzjMdcwL7Ei6vKq
wtOKrJmZ2R96pPU74aUJsDDNion8o1EVra4uGHD/pE83ESsqc18K3J9UwqqnSyv6CkbhOVCkPzSh
sCyuTvzZKax6HEzF6oe7mGoX1bKbhA+2qTnwxw7M1KfP/6xV/k9dpTc+pc1cPi3NlXWrbGn61nSa
9VHrV9rGbnLOroz6Z7hcHQrquIFce2kdufZEH3y+7OZfec6uTw3KI71OPEkhWUWYd+l4OpiayfRA
yQ9xVDxPFa1+SxAfSb9y45SLQaW9XH/m9S/lp6Cd6UHWP/9n36LltLitOD/XF4k7F457uo3+lpVb
btxh7sbrRWKAFJJVhHldnRADuPlj1cn/XUUnwjQxVkjLPyrNiwsnZtNV1TR9ezbL1b+XtO2O+T+3
g2NpmiVtM1d/2DdXbqD9kz4l9YFReA4U6Y+YUFiGeZ24cKYXV9yA5EUb2+5TltXSUnGZE2/2Zja/
MPuLuoa78YVt4lMI2INETGZiNiiLbdkvvx3pl61b9Mude502LZFxC9rLnZNMt/lE3bl8QftqnxqU
T7fXIZ4gVu0Y5c4nrS85bv0XlpfY/OLmAVx+rW2HjEGtPdkf97m0n8Q4yW3bx7JyStzKPG47Egce
kZ/j3v24w9yN14nENpnX6f6kTZJ2OMuEkhNvBREnjrl9WS4Ex9xjU1lO1p+Mkxdzvq75ClhO5Pn8
mYg8TARiYSVTtgMG1D/pU1IfGIXnQJH+6EwoyIumveimF2J5wfXHU+qkYR8XYC2vPx7cpFxeXwb9
wXFxI4iVdenhtkzzZZV++f1ImyG58sq4hfm0dHkOvk2tfSWtUfk5axFPYb4wP/aVc/OE+cuO2brE
+JW159L98SX9JNvRtuuUi5W1x+Jx4NHKhp8yb926qo7ZusR5lbXn0v3x9R13mLvxzkVi8Ya8DLZO
KbasmEpFqBRS/niKFVfifOsel3XF6q9KTwWf9jjWg7xa+1XHZZtuW6bVSa/on/QpqQ+MwnOgSH90
JRTsyoKctAn28ai8EMsLLqiThn3tgu2PpYLE7cu2CmXExTxWNrYd1mXLV9xILOU37spxc3ndfmV7
IRU32AXKr0s8oY7pbiQ/9iM+8cfD+rVjtp6SGJRl5HiHxxf1k0zXtuuUC/fVMlr/UoL8HHetnZQw
PVaPp9g/mLvxWpEobsRtgDrzj53n2MftMYEFZBq2pciy+8q7orFtmSbTw1XKMF+ZwAvbGVD/pE9J
fWAUngNF+qMboXC++BjcPUIquxCXXGhdXVaA2EfgyqP2oLzNq7WZfE4hWmy+9BHuQaQs9lHOXeh9
G5F++ePzdL+vtelW7PxNRDmn3KO67MZaODeXP+iXR2s/OedinxqUT/uyPvE0Pzdt3LK4cnkDtPrl
sUJ8zI/F/FSIF/G5rJ98O+p2jXLhPrbF+alxEOTJ1cVxT7Y7GvdkH+ZuvN0Iz/P2vUb/uBg4QRUT
XiBMQxknsIJjVti6fRwL84V1+X2x+hrkn/n/7y1eE8DxSB8G0b+0vPQpqQ+MwnOgSH/gQtU6J1fm
L6YWXHjnF3N7LLzgAnuhnX+bniNuKmGakh8XdbxT5vb9D4FcW77N9Ebo8qUXdLVs2pY7VvfHRf68
Ktqc1xEpa0nHDTcZiC1XPjw3WcbWmbVlb8Bq+2V9ytLj5eftDTqewjQpWMX5zM9R5AsJ81uym7+P
j2RcojHoyyW49lwffV+X9JOvR9StbZeVC/MnZOeXCCBRNt+XkjjmuFeXC/MnVI57AszdeNX5syzJ
/MuJKksqqA4jwgsoafOV07nIwo+U3Pn4H+mk+dyx8Mc7RWGXbFvBmNU1F4huJTGtR/4YKiY8E3rv
X4r0KakPjMJzoNAfpE0YT4T0B0y7CW8kEHnB33YcFDX7R58uBozCc6DQH6RNxhVP+VWujGyVjXQB
x31RYNpNeFOQK5OxH+v0ySL923SfLgqMwnOg0B+kTRhPhPQHTLsJk/WFPl0MGIXnQKE/SJswngjp
D5h2EybrC326GDAKz4FCf5A2YTwR0h8w7SZM1hf6dDFgFJ4Dhf4gbcJ4IqQ/OP/GB+zSpUukITAK
z4FCf5A2YTwR0h+cf+MDpgkrUg6MwnOg0B+kTRhPhPQH59/4gGnCipQDo/AcKPQHaRPGEyH9wfk3
PmCasCLlwCg8Bwr9QdqE8URIf3D+jQ+YJqxIOTAKz4FCf5A2YTwR0h+cf+MDpgkrUg6MwnOg0B+k
TRhPhPTHquaf/b/x8v/K55D/eSr9n/1kYWCasNoYTvfNGR9PE3Nm/zQ9dmR2fPqOOQrKwSg8Bwr9
QdqE8URIf6xi/kF0bk2nZisiPHF8ejDfPt7dMpPpQSEPqQ9MCqqN42jH7By5fYjNM2b/9JI52pn4
9NP9M2ayc5SVSYBReA4U+oO0CeOJkP7oev5BSG7tHpt/Hu9GhCdWO8UqZzQfqQtMCqrN5tTsn4Hw
hAAVq5xYFT2zb05FXhiF50ChP0ibMJ4I6Y8u558XndivKzwL+6QpsEx4bTheYAbCs7BP4Tlo6A/S
JownQvqju/l3bHa3svfsPAXxSeHZNjAvvDaa7DF7UWhSeK4V9AdpE8YTIf2xsvnHR+0rA5aJr01F
ik63z0ftawv9QdqE8URIf6xs/klBiW0hNvnjonaBOTG1kdhftUvROYc/Llpj6A/SJownQvpjZfOv
RHjOVz3d43g+Zl8WmBRUm4YVlfL1joT5n1TCqqdLyz9mBzAKz4FCf5A2YTwR0h+cf+MDJgUVqQeM
wnOg0B+kTRhPhPQH59/4gGnCipQDo/AcKPQHaRPGEyH9wfk3PmCasCLlwCg8Bwr9QdqE8URIf3D+
jQ+YJqxIOTAKz4FCf5A2YTwR0h+cf+MDpgkrUg6MwnOg0B+kTRhPhPQHjUbLjMJzoNAfpE0YT4T0
B+zixYtkRNCniwGj8Bwo9AdpE8YTIf0B027CZH2hTxcDRuE5UOgP0iaMJ0L6A6bdhMn6Qp8uBozC
c6DQH6RNGE+E9AdMuwmT9YU+XQwYhedAoT9ImzCeCOkPmHYTJusLfboYMArPgUJ/kDZhPBHSHzDt
JkzWF/p0MWAUngOF/iBtwngipD9g2k24HQ7NbDIxE8fsUMkT5puZQzUPqUu3Pl0DTvbMtoi77b2T
9Fh5nMEoPAcK/UHahPFESH/A5M23VQ5nZnbo9k/M3va22TsRx1MOZxOf72Rvu0Sgkjp06tN1IBd3
EJvzuKuKMxiF50ChP0ibMJ4I6Q+YvPl2BwSAtpoZpGO1anvPnOTykCaszqfrgPvCUx1nMArPgUJ/
kDZhPBHSH7DsJt0FuPGXPUIPBWlMoJK6dO/TNcILzOo4g1F4DhT6g7QJ44mQ/oD5m3Sn4EavPWqn
8Gyb1fl06MiYq44zGIXnQKE/SJswngjpD1h2o+4W+Y5dRiAA+Kh9aVbp0+EiRafbL48zGIXnQKE/
SJswngjpD5i78bbNyd4suPGnQgA3fSEC+OOidunSp2uBja/i6jp/XLTG0B+kTRhPhPQHTN58W+Vw
5v+kDfCrnYHwnIvS+J+5Ic3o1KdrgBWVIu7A/E8qlccZjMJzoNAfpE0YT4T0B0zefMn6Q58uBozC
c6DQH6RNGE+E9AdMuwmT9YU+XQwYhedAoT9ImzCeCOkPmHYTJusLfboYMArPgUJ/kDZhPBHSHzDt
JkzWF/p0MWAUngOF/iBtwngipD9oNFpmFJ4Dhf4gbcJ4IqQ/OP/GB+zSpUukITAKz4FCf5A2YTwR
0h+cf+MDpgkrUg6MwnOg0B+kTRhPhPQH59/4gGnCipQDo/AcKPQHaRPGEyH9wfk3PmCasCLlwCg8
Bwr9QdqE8URIf3D+jQ+YJqxIOTAKz4FCf5A2YTwR0h+cf+MDpgkrUg6MwnOg0B+kTRhPhPRHt/Pv
wEzF/8ueTLbM7nFVvqk5KBwnTYBpwmpjON03Z0Tcndk/TY8dmR2fvmOOgnIwCs+BQn+QNmE8EdIf
3c4/CMpqIXkwnZjpwXz7eHfLTKYHhTykPjApqDaOox2zc+T2ITbPmP3TS+ZoZ+LTT/fPmMnOUVYm
AUbhOVDoD9ImjCdC+qPb+VdHeAZ5jnfN1tauOc7lIU2ASUG12Zya/TMQnhCgYpUTq6Jn9s2pyAuj
8Bwo9AdpE8YTIf3R7fzLP2rf2j2O5JHitN4qKYkDy4TXhuMFZiA8C/sUnoOG/iBtwngipD9WN/8g
KLV3PCk82wbmhddGkz1mLwpNCs+1gv4gbcJ4IqQ/Vjf/js3uVg3hyUftSwPLxNemIkWn2+ej9rWF
/iBtwngipD86nX8HU/+jISsoncCU2wn8cVG7wJyY2kjsr9ql6JzDHxetMfQHaRPGEyH90en8swIz
e8dTFaEWrHq6fHzMviwwKag2DSsqRdyB+Z9UwqqnS8s/ZgcwCs+BQn+QNmE8EdIfnH/jAyYFFakH
jMJzoNAfpE0YT4T0B+ff+IBpwoqUA6PwHCj0B2kTxhMh/cH5Nz5gmrAi5cAoPAcK/UHahPFESH9w
/o0PmCasSDkwCs+BQn+QNmE8EdIfnH/jA6YJK1IOLCc8aTQajUaj0Wi0ruzKK680/w86HMeOt6dN
BgAAAABJRU5ErkJggg==
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Datamart-3:">Datamart 3:<a class="anchor-link" href="#Datamart-3:">&#182;</a></h2><h5 id="Cube-du-datamart-3-avec-comme-mesure-les-ratings-moyens-de-Yelp.fr">Cube du datamart 3 avec comme mesure les ratings moyens de Yelp.fr<a class="anchor-link" href="#Cube-du-datamart-3-avec-comme-mesure-les-ratings-moyens-de-Yelp.fr">&#182;</a></h5><p>Ce schéma utilise les mêmes données récoltés pour le deuxième datamart, mais la mesure n'est plus celle utilisée pour ce dernier: la mesure est maintenant les 'ratings' yelp attribués aux différents restaurants.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[7]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython2"><pre><span class="n">Image</span><span class="p">(</span><span class="n">filename</span><span class="o">=</span><span class="s1">&#39;Capture5.png&#39;</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area"><div class="prompt output_prompt">Out[7]:</div>


<div class="output_png output_subarea output_execute_result">
<img src="data:image/png;base64,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
Oos+gaX/4ggncGi+rkZ16FcqtV9+VOchs3PLglnwb7yTbshKK4c8OWZ5sW2xH+Vfy02+7o/CpGNM
TcbXYJpfys8uXLhgfU7DQJ3/CfmmviCkXz0k6EFcfuz7ZlO/3LLzUDVtvdenqK/axlvMzkPFtmn1
1eVpckxtsdZjU36u/dqY8Rg6G2+O5cVqO63na25+/W22zUYc+4zn59p9LW2uDpqWNZJDzwN6cbme
BZQ/+T3Wz9cWXTse2DSsJ7421T01JeuNsR6dl8yJAW1xZd/2YOqJEyWGIzJG01UGBKM63FSVUhwp
t9elF+sDZIgdkAzfn2I3ZIemp+g/N3rQkfAhtKw0Leu/O7FyZZ02wBfN4paiM1Gm1dyQ13ujczQt
75hXPesh42swzS/dH309LGg0kfNF/fdDwz21rjnk8ks9JPhlRDO/XEP+aUwqM0t9dXnWcyxts9Zj
tPm59mtixmPpbLwNsJ+qD0Te5cWGX3RrqY027NhnPD/X7mtpc7Wz+weIe+eAy5v8Huvna4uuHQ9s
GtYTX5v2njpv1hFjfTsvmRMDWkNfSvHEotGojnBKS0T8EFbIcOW9/HXpBTLEDkiG70+xG3JTXJ26
Cek/I8uL3n9IJt2Q13Gjq1BXd5C+c3A89ubo59NyGZQDxurxP6Mc2+7tZ6y+0R+k4Y3Zq8OVdYR1
rhVXvu7Yit8uXoNZ/NL/wz+NMG9jv9R/D9x/DCr59dAxfp61xPZh8UbnDNCxVa5VZQRCZJ+VYxrW
H7vW0euvMi6tZj+Ly6PjW1zW8U4q53zMzz/l/Nyx+Lhz6eu1D+pr8xp3Nt7sOdS35WztUlyPsv61
tK93POX68N5XOX5XxuW1dOPYK9v98xng2n3T3GMHy7Nct5ljJ6wvPBZXrkvHA5uGTsbXlPtS1S8L
oWCaP0/bPlavHydzej7o4XnJfEFgQ5EIErxnY57IEDsgGb4/1d2QmzCs07sJ6YHBBXRxQ6h94HE3
gJI1KLR1dfvpgzorNyybb/ggO5Zebh/erOq3B+m2Pu+4/fxeelR9tnnyvAad9ssiTQ8X9hpUzmf0
x9b+EQvLh9gyQRu7MrH9O9yDd90+/WNyv+G1jqVNbCvvWvnL9hgnlfN8JXad3XKNL5R4+Xt57f36
Wr7GnY43/5wnUdMuw2tZXN/YdQnx6/HzhOXtcXnn5PL5+Tf62INjCOPKtfumucf6+UTsutlrFu5z
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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Quelques-visualisations-&#224;-la-sortie-des-cubes">Quelques visualisations &#224; la sortie des cubes<a class="anchor-link" href="#Quelques-visualisations-&#224;-la-sortie-des-cubes">&#182;</a></h1><p>Une fois les cubes chargés sous Pentaho Server, nous avons pu faire des requête MDX pour extraire certaines informations que nous avons ensuite pu visualiser en utilisant Google Charts, accessible depuis le site suivant:</p>
<p><a href="https://developers.google.com/chart/">https://developers.google.com/chart/</a></p>
<h2 id="Datamart-1:">Datamart 1:<a class="anchor-link" href="#Datamart-1:">&#182;</a></h2><h3 id="nombre-de-restaurants-poss&#233;dant-un-&#233;talage-ou-un-terrasse,-par-arrondissement">nombre de restaurants poss&#233;dant un &#233;talage ou un terrasse, par arrondissement<a class="anchor-link" href="#nombre-de-restaurants-poss&#233;dant-un-&#233;talage-ou-un-terrasse,-par-arrondissement">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
  <head>  
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript">
   google.charts.load('current', {packages: ['map','corechart','bar']});

    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([



["Arrondissement","Nombre de restaurants"],
["1", 386],
[2, 224],
[3, 166],
[4, 273],
[5, 448],
[6, 302],
[7, 229],
[8, 518],
[9, 399],
[10, 531],
[11, 532],
[12, 582],
[13, 433],
[14, 470],
[15, 729],
[16, 449],
[17, 689],
[18, 504],
[19, 356],
[20, 360]




      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1]);

      var options = {
        title: "Nombre de restaurants par arrondissement, Paris",
        width: 900,
        height:600,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }

</script>

  <script type="text/javascript">
    google.charts.setOnLoadCallback(drawMap);

    function drawMap () {
      var data = google.visualization.arrayToDataTable([
          ['Lat', 'Long', 'Name'],
          [48.871116659, 2.3082988,'CHEZ YI YI, Evalution: 20'],
          [48.846444798, 2.372054961,'LA TOUR DES SOUHAITS, Evalution: 20'],
          [48.845194914, 2.383490928,'LE LYS D\'OR, Evalution: 20'],
          [48.84031859, 2.399533514,'NOUVELLE AMITIE, Evalution: 20'],
          [48.837962751, 2.404956766,'DON DIEGO, Evalution: 20'],
          [48.863874045, 2.362705862,'PARIS NEW YORK, Evalution: 20'],
          [48.840329041, 2.340589872,'LITHANG, Evalution: 20'],
          [48.845887053, 2.353156913,'RESTAURANT KATHMANDU, Evalution: 20'],
          [48.840931522, 2.349671467,'VITAMINE, Evalution: 20'],
          [48.843873525, 2.3282588,'SOUS LES CERISIERS, Evalution: 20'],
          [48.855354229, 2.357755648,'AU BOURGUIGNON DU MARAIS, Evalution: 10'],
          [48.873455996, 2.309242859,'IL CAFFE, Evalution: 30'],
          [48.865992998, 2.340072464,'BISTROT  LE REGENT, Evalution: 20'],
          [48.865454505, 2.336391386,'LA FONTAINE D\'ITALIE, Evalution: 20'],
          [48.871152595, 2.335364637,'HIGUMA, Evalution: 30'],
          [48.866407181, 2.346945082,'YOKOSUNA, Evalution: 20'],
          [48.848613621, 2.265621612,'PIZZERIA D\'AUTEUIL, Evalution: 20'],
          [48.849202902, 2.275427248,'RESTAURANT LE 40, Evalution: 10'],
          [48.845205915, 2.384006319,'MAY DO, Evalution: 20'],
          [48.828095143, 2.351716348,'L\'AUBERGE DE LA BUTTE, Evalution: 20'],
          [48.834782946, 2.368118112,'SAVEUR ASIA, Evalution: 20'],
          [48.835067319, 2.346227641,'TRISKELL, Evalution: 10'],
          [48.83686788, 2.318211179,'TABLE DE CHINE, Evalution: 20'],
          [48.832476795, 2.324943318,'CHEZ FELICIE, Evalution: 20'],
          [48.843443024, 2.324951569,'STARBUCKS COFFEE FRANCE, Evalution: 10'],
          [48.83150285, 2.329242829,'LES FILS DE LA FERME, Evalution: 30'],
          [48.832377603, 2.32043809,'LE JEU DE QUILLES, Evalution: 10'],
          [48.844493058, 2.320146383,'LES CEDRES DU LIBAN, Evalution: 10'],
          [48.86817539, 2.341715446,'AU BERCAIL - LA GRANGE, Evalution: 20'],
          [48.866842816, 2.358683939,'CHEZ ALAIN, Evalution: 20'],
          [48.862982423, 2.350722051,'LE SEBASTO, Evalution: 20'],
          [48.866073855, 2.364926023,'CHEZ JENNY, Evalution: 10'],
          [48.864467909, 2.357908377,'WAN XING, Evalution: 20'],
          [48.850446552, 2.270610146,'CAFE TABAC RIBERA, Evalution: 20'],
          [48.851733838, 2.273773266,'RESTAURANT LES FABLES, Evalution: 20'],
          [48.863923365, 2.386501319,'RESTAURANT DU LYCEE, Evalution: 20'],
          [48.873259122, 2.310765981,'RISTORANTE NAPOLETANO, Evalution: 20'],
          [48.883735954, 2.360343239,'NISSAN EXOTIQUE, Evalution: 20'],
          [48.844209052, 2.317626998,'SARL MA GRAND MERE M\'A DIT, Evalution: 20'],
          [48.893535356, 2.38072879,'RESTAURANT LES EIDERS, Evalution: 10'],
          [48.867567958, 2.396324924,'LA NOUVELLE ETOILE, Evalution: 20'],
          [48.86518645, 2.336546681,'L\'ECRIN, Evalution: 20'],
          [48.864526214, 2.340961885,'LE BISTRO DE MAELLE ET AUGUSTIN, Evalution: 30'],
          [48.864742564, 2.347178484,'VIENG SIAM, Evalution: 20'],
          [48.865253922, 2.350453813,'FESTINS D\'ORIENT, Evalution: 10'],
          [48.86822691, 2.35037699,'BARETTO DI EDGAR, Evalution: 20'],
          [48.871152595, 2.335364637,'PIZZA PINO OPERA, Evalution: 10'],
          [48.868282098, 2.33570163,'IDFOOD, Evalution: 20'],
          [48.870182684, 2.350274132,'BONNE SAVEUR, Evalution: 20'],
          [48.870352648, 2.34946465,'PAIN CHAUD, Evalution: 10'],
          [48.870896824, 2.34168666,'OISHINOYA, Evalution: 20'],
          [48.851082586, 2.397204627,'LE CHALET D\'AVRON, Evalution: 20'],
          [48.85050724, 2.39848293,'LE TAILLEBOURG, Evalution: 20'],
          [48.848793486, 2.397446097,'SOFI, Evalution: 10'],
          [48.84547727, 2.370157126,'EKI SUSHI, Evalution: 20'],
          [48.838114563, 2.392536037,'SOURIRE D\'ASIE, Evalution: 10'],
          [48.847677263, 2.388856792,'SAKAE SUSHI, Evalution: 20'],
          [48.859093245, 2.349849681,'LE PAVE, Evalution: 20'],
          [48.847626842, 2.352197819,'2 BIS CAFE, Evalution: 20'],
          [48.841409877, 2.362801203,'BANH MI VIET, Evalution: 20'],
          [48.843362351, 2.298647177,'WASHI, Evalution: 20'],
          [48.83849611, 2.293582737,'PLAISIR GOURMAND, Evalution: 20'],
          [48.837226975, 2.276996341,'LE BISTROT D ANDRE, Evalution: 10'],
          [48.837737783, 2.277804722,'GOURMANDS DISENT, Evalution: 20'],
          [48.850193348, 2.2760697,'PIZZERIA FIRENZE, Evalution: 20'],
          [48.845423732, 2.379137146,'GOLD GRAGON, Evalution: 20'],
          [48.846998325, 2.387024045,'KANJI, Evalution: 10'],
          [48.838987116, 2.360614411,'LA CIGALE, Evalution: 20'],
          [48.831352138, 2.354328324,'CAFE DE FRANCE, Evalution: 10'],
          [48.841712585, 2.328253667,'DIETETIC SHOP, Evalution: 20'],
          [48.842419942, 2.324548753,'NOUVEAU LOTUS IMPERIAL, Evalution: 10'],
          [48.837205707, 2.279175799,'RESTAURANT SHABESTAN, Evalution: 10'],
          [48.864264026, 2.386120139,'LA MERE LACHAISE, Evalution: 20'],
          [48.870524628, 2.37881812,'LES TRIPLETTES DE BELLEVILLE, Evalution: 20'],
          [48.859974416, 2.347208736,'L\'AMAZONIAL, Evalution: 20'],
          [48.867312737, 2.33686259,'YAMAMOTO, Evalution: 20'],
          [48.869444708, 2.328647498,'BISTROT CAPUCINES, Evalution: 20'],
          [48.865456888, 2.352027122,'THAI VIET, Evalution: 20'],
          [48.870084857, 2.335967842,'BIOBURGER, Evalution: 10'],
          [48.865047289, 2.347822585,'MONSIEUR MONTORGUEIL, Evalution: 20'],
          [48.870272341, 2.334841545,'SOURCES LOCAL AND FRESH, Evalution: 20'],
          [48.866118775, 2.350829493,'L\'ARDENNAISE, Evalution: 10'],
          [48.863453811, 2.363169182,'NANASHI CHARLOT, Evalution: 20'],
          [48.864687193, 2.356254211,'NOUVEAU EXPRESS WENZHOU, Evalution: 20'],
          [48.859020639, 2.349612612,'AKASH, Evalution: 20'],
          [48.842502815, 2.342897307,'LES URSULINES, Evalution: 30'],
          [48.849542646, 2.348843101,'BAMBOO, Evalution: 20'],
          [48.894195409, 2.381588692,'RESTAURANT L\'AUDACE, Evalution: 10'],
          [48.885022874, 2.378917495,'RESTAURANT LA PAIX, Evalution: 10'],
          [48.849155232, 2.406528792,'RESTAURANT L\'AUTOBUS, Evalution: 20'],
          [48.848477394, 2.397801792,'CAFE DU TRÔNE, Evalution: 20'],
          [48.854449406, 2.395752144,'CAFE LINO, Evalution: 10'],
          [48.84394393, 2.373046141,'MEKONG EXPRESS, Evalution: 20'],
          [48.83952451, 2.322225183,'DELICES D ASIE, Evalution: 10'],
          [48.849576932, 2.275902487,'RESTAURANT MINIATURES, Evalution: 20'],
          [48.845082888, 2.271307052,'BRASSERIE LE PETIT VERSAILLES, Evalution: 10'],
          [48.872701519, 2.32343198,'GUSTO ITALIA, Evalution: 20'],
          [48.838676525, 2.359710138,'VARIATIONS, Evalution: 20'],
          [48.828208452, 2.358284057,'LAO DOUANG CHAN, Evalution: 20'],
          [48.828208452, 2.358284057,'NOUVELLES FLEURS DE MAI, Evalution: 20'],
          [48.835886885, 2.348822016,'LE MARIJAN, Evalution: 20'],
          [48.824043335, 2.344631596,'LE SAMSON, Evalution: 20'],
          [48.83175697, 2.314516132,'L\'ESSENTIEL, Evalution: 10'],
          [48.84214822, 2.294244257,'LE CROIX NIVERT, Evalution: 20'],
          [48.839698323, 2.305694342,'GOURMET DE LIN, Evalution: 20'],
          [48.878970005, 2.298771303,'RESTAURANT LE BAR A HUITRES, Evalution: 20'],
          [48.870622352, 2.355012028,'LE PETIT CAFE, Evalution: 10'],
          [48.849705642, 2.397879348,'KHUN AKORN, Evalution: 20'],
          [48.858056318, 2.380820478,'DUSSOLIER Olivier, Evalution: 10'],
          [48.852965937, 2.374253304,'CREPES SHOW, Evalution: 30'],
          [48.849937211, 2.385844017,'BONA IDEA, Evalution: 10'],
          [48.853621223, 2.382529268,'MAMIE TEVENNEC, Evalution: 20'],
          [48.850422533, 2.380159494,'JIN LONG, Evalution: 10'],
          [48.848324115, 2.37208393,'YOOKI SUSHI, Evalution: 20'],
          [48.841488534, 2.404790286,'SUSHI KYOTO, Evalution: 10'],
          [48.864707912, 2.358048455,'RESTAURANT THAI NAM, Evalution: 20'],
          [48.844624152, 2.341835722,'LES PAPILLES, Evalution: 20'],
          [48.846684617, 2.351786203,'CARDINAL SUSHI, Evalution: 20'],
          [48.849049256, 2.349692552,'HAMLER\'S BURGERY, Evalution: 30'],
          [48.853122516, 2.3313715,'EGGS& CO, Evalution: 10'],
          [48.871573379, 2.31066014,'GREEN TEA HOUSE, Evalution: 20'],
          [48.864083062, 2.342512826,'LOUP, Evalution: 20'],
          [48.867444931, 2.336114897,'OTODOKE JUJIYA SURFING, Evalution: 10'],
          [48.867197045, 2.335105749,'AKITA, Evalution: 10'],
          [48.869117248, 2.339044432,'A NOSTE, Evalution: 20'],
          [48.86880464, 2.329548104,'FROG HOP HOUSE, Evalution: 10'],
          [48.870695325, 2.336961048,'CAFFE CONCERTO, Evalution: 10'],
          [48.867411928, 2.351619906,'LE SELECT, Evalution: 10'],
          [48.832352851, 2.338552692,'LE MODERNE, Evalution: 20'],
          [48.837753001, 2.354858199,'AU PETIT BAR, Evalution: 30'],
          [48.839393049, 2.360028247,'BANYAN THAI, Evalution: 20'],
          [48.84111652, 2.329873547,'PIZZA TAVOLA DI GIO, Evalution: 10'],
          [48.828856221, 2.307728221,'LE SQUARE, Evalution: 10'],
          [48.844055773, 2.384250172,'CHEZ NUY, Evalution: 10'],
          [48.845162828, 2.271386991,'RESTAURANT GIALLO  ORO, Evalution: 30'],
          [48.884963836, 2.371163157,'RESTAURANT CORSO QUAI DE SEINE, Evalution: 10'],
          [48.890865625, 2.377249394,'RESTAURANT RAPIDE DELICES DE FLANDRE, Evalution: 10'],
          [48.885825755, 2.378233973,'BAR-RESTAURANT LA RENAISSANCE, Evalution: 20'],
          [48.871862885, 2.377302565,'BRASSERIE LA VIELLEUSE, Evalution: 20'],
          [48.852982622, 2.40775484,'LE PRINCE, Evalution: 30'],
          [48.842672595, 2.341777234,'LE RISALE, Evalution: 20'],
          [48.843037091, 2.348923957,'LA PETITE PROVENCE, Evalution: 20'],
          [48.881358296, 2.358078891,'VISHNU CAFE, Evalution: 30'],
          [48.83770588, 2.373449873,'CHEZ PROSPER, Evalution: 20'],
          [48.850497339, 2.389059758,'VIET CAFE, Evalution: 20'],
          [48.850487438, 2.386119956,'PATRICKS LE BALLON VERT, Evalution: 20'],
          [48.844582532, 2.404857941,'TRESOR DES GOURMETS, Evalution: 20'],
          [48.846352574, 2.378362684,'MIYAKO, Evalution: 20'],
          [48.839060456, 2.404131333,'PIZZA D\'ORO, Evalution: 20'],
          [48.866892687, 2.336123698,'SUSHI GAN, Evalution: 20'],
          [48.863993771, 2.343453035,'BEEF CLUB, Evalution: 30'],
          [48.870552314, 2.33482156,'LA TOUR DE JADE, Evalution: 10'],
          [48.870338713, 2.342717993,'FOU LO EXPRESS, Evalution: 20'],
          [48.870174067, 2.339214029,'ATSUATSU RICHELIEU, Evalution: 20'],
          [48.869304814, 2.328837447,'SUSHIC, Evalution: 20'],
          [48.867166792, 2.34409292,'LA PIAZZETTA, Evalution: 20'],
          [48.870724111, 2.342864121,'MONTMARTRE CAFE, Evalution: 30'],
          [48.870100727, 2.335928249,'LA PLANQUE, Evalution: 10'],
          [48.844603067, 2.320106414,'AU COMPTOIR NIPPON, Evalution: 10'],
          [48.838492993, 2.357168568,'LE BARATIN, Evalution: 10'],
          [48.836550421, 2.35349739,'LA REINE BLANCHE, Evalution: 20'],
          [48.843212922, 2.320672776,'CESAR PALACE, Evalution: 20'],
          [48.844843069, 2.320800753,'LES COMEDIENS, Evalution: 10'],
          [48.836732852, 2.392642745,'LE CAMBODGE, Evalution: 20'],
          [48.838732079, 2.396244617,'ROBATA, Evalution: 20'],
          [48.863621758, 2.35108123,'EURO FRIED CHIKEN, Evalution: 20'],
          [48.850683437, 2.271370857,'RESTAURANT L\'ACAJOU, Evalution: 20'],
          [48.8500133, 2.272490563,'LE BISTROT 31, Evalution: 20'],
          [48.884963836, 2.371163157,'RESTAURANT LE BARLU, Evalution: 10'],
          [48.885667159, 2.386644698,'RESTAURANT LE MILK, Evalution: 20'],
          [48.87026464, 2.379168132,'RESTAURANT CHEZ GABIN, Evalution: 10'],
          [48.867470967, 2.396496721,'RESTAURANT AUX MONTS D\'AUVERGNE, Evalution: 20'],
          [48.865037388, 2.395050838,'CAFE MARTIN, Evalution: 10']


        ]);

      var options1 = {
        mapType: 'styledMap',
        zoomLevel: 12,
        showTip: true,
        useMapTypeControl: true,
        maps: {
          // Your custom mapTypeId holding custom map styles.
          styledMap: {
            name: 'Styled Map', // This name will be displayed in the map type control.
            styles: [
              {featureType: 'poi.attraction',
               stylers: [{color: '#fce8b2'}]
              },
              {featureType: 'road.highway',
               stylers: [{hue: '#0277bd'}, {saturation: -50}]
              },
              {featureType: 'road.highway',
               elementType: 'labels.icon',
               stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
              },
              {featureType: 'landscape',
               stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
              }
        ]}}
      };

      var map = new google.visualization.Map(document.getElementById('map_div'));

      map.draw(data, options1);
    }

    google.charts.setOnLoadCallback(drawMap1);



    function drawMap1 () {
      var data_avignon = google.visualization.arrayToDataTable([
          ['Lat', 'Long', 'Name'],
          [43.93001234, 4.823067436,'FROMENTIERS MAGASINS, Evalution: 20'],
          [43.94663642, 4.805777678,'Mc Donald\'s, Evalution: 10'],
          [43.949463646, 4.806287019,'La Sperlongaise, Evalution: 10'],
          [43.943171211, 4.818915147,'L\'escargot, Evalution: 10'],
          [43.938385575, 4.822122605,'La Bonne Barquette, Evalution: 10'],
          [43.930847502, 4.877474132,'Kyriad Cap Sud, Evalution: 10'],
          [43.930847502, 4.877474132,'Café Les Négociants, Evalution: 20'],
          [43.946577015, 4.806332856,'L\'Ami Voyage...en Compagnie, Evalution: 10'],
          [43.949001609, 4.806176277,'Le Jaquemart, Evalution: 10'],
          [43.948646281, 4.810061055,'Le Pie Kafé, Evalution: 20'],
          [43.942307022, 4.815902707,'Avignon Pizza, Evalution: 10'],
          [43.926736374, 4.874901169,'L\' Emeraude, Evalution: 20'],
          [43.94468633, 4.807527002,'Le Pili, Evalution: 20'],
          [43.948846291, 4.810464417,'Wall Street Café, Evalution: 20'],
          [43.949101717, 4.806196262,'La Couscousserie de l\'Horloge, Evalution: 10'],
          [43.950939415, 4.812774789,'Pace é Saluté, Evalution: 20'],
          [43.945414588, 4.814137248,'Le Pot de Vin, Evalution: 10'],
          [43.948032982, 4.809634221,'Laura Di Pasta, Evalution: 10'],
          [43.948543789, 4.808286979,'Encas de Plaisir, Evalution: 10'],
          [43.949801373, 4.819657858,'Ogimi Sushi, Evalution: 20'],
          [43.948665716, 4.808733615,'Le Gallia, Evalution: 10'],
          [43.930847502, 4.877474132,'La Dolce Vita, Evalution: 20'],
          [43.949227127, 4.8085466,'Chez Lulu, Evalution: 10'],
          [43.944319084, 4.807957503,'Terre de Saveurs, Evalution: 20'],
          [43.928734318, 4.840316597,'Subway CS, Evalution: 20'],
          [43.940751446, 4.800177505,'Le Petit Chaudron, Evalution: 10'],
          [43.924222965, 4.787114898,'Kayser Avignon TGV, Evalution: 10'],
          [43.946966446, 4.810460387,'MADDOX, Evalution: 10'],
          [43.955853238, 4.81052767,'Le Bercail, Evalution: 10'],
          [43.944318534, 4.807563671,'Zeste, Evalution: 10'],
          [43.950092713, 4.803200905,'Le Crillon, Evalution: 20'],
          [43.947934524, 4.806668566,'Le Vintage, Evalution: 20'],
          [43.928678947, 4.839214125,'Wafu, Evalution: 20'],
          [43.937237266, 4.879724139,'Les Frènes, Evalution: 20'],
          [43.948417279, 4.806665266,'La Dame Blanche, Evalution: 10'],
          [43.926228385, 4.832684248,'Gaston Le Camion, Evalution: 10'],
          [43.926143977, 4.844681197,'La Boucherie, Evalution: 10'],
          [43.930777603, 4.807918243,'Olympia brasserie, Evalution: 20'],
          [43.937892919, 4.815285557,'Les Toqués en Vadrouille, Evalution: 10'],
          [43.949044696, 4.810517591,'Baalbeck, Evalution: 20'],
          [43.947865035, 4.811382444,'Orjade, Evalution: 20'],
          [43.966590077, 4.834883538,'La Mangrove Beach Club, Evalution: 20'],
          [43.947714689, 4.807442478,'Restaurant Gustave, Evalution: 20'],
          [43.949412675, 4.812827593,'Be Frite, Evalution: 10'],
          [43.950649358, 4.812864813,'Taverne Avedis, Evalution: 10'],
          [43.949623892, 4.812301568,'Nostrum, Evalution: 10'],
          [43.948203679, 4.810929391,'Da Davide, Evalution: 20'],
          [43.950915396, 4.803006373,'La Férigoulo, Evalution: 20'],
          [43.927232, 4.847812373,'Restaurant Gastronomique et Brasserie, Evalution: 10'],
          [43.950374153, 4.813902013,'Citron Pressé, Evalution: 10'],
          [43.948594929, 4.799714324,'MIREIO, Evalution: 10'],
          [43.937875433, 4.809217529,'La Pause Café, Evalution: 10'],
          [43.948165725, 4.806537472,'Xuan, Evalution: 10'],
          [43.930847502, 4.877474132,'KFC AVIGNON, Evalution: 10'],
          [43.949372889, 4.807568805,'Nem, Evalution: 20'],
          [43.948951739, 4.806166193,'La Brasserie des Arts, Evalution: 10'],
          [43.930847502, 4.877474132,'Les Lauriers Roses, Evalution: 10'],
          [43.9287864, 4.788889171,'Snack Ambul\', Evalution: 10'],
          [43.944218609, 4.807533602,'Le Molière, Evalution: 10'],
          [43.948712031, 4.797035325,'La Treille, Evalution: 10'],
          [43.948912319, 4.80572194,'Le Cid Café, Evalution: 20'],
          [43.943917185, 4.805477904,'Le Domus, Evalution: 10'],
          [43.945820521, 4.816876651,'Le Bodeguita Cubana, Evalution: 10'],
          [43.948880049, 4.804128096,'L\'Essentiel, Evalution: 20'],
          [43.925951588, 4.850976938,'Sole e Pasta, Evalution: 10'],
          [43.942517139, 4.817342905,'Hayat Le restaurant Libanais, Evalution: 10'],
          [43.942221582, 4.807154439,'Le Palace, Evalution: 20'],
          [43.948753173, 4.808600321,'Tapenade Café, Evalution: 10'],
          [43.945674942, 4.81241451,'Le Jardin des Gourmets, Evalution: 10'],
          [43.945074294, 4.807432577,'Master Man Express Tandori, Evalution: 10'],
          [43.952022818, 4.836075024,'Resto Baabou, Evalution: 20'],
          [43.944593739, 4.807669096,'Happy Days Café, Evalution: 10'],
          [43.95030723, 4.803284878,'La Vieille Fontaine, Evalution: 10'],
          [43.975720734, 4.827455649,'La Ferme, Evalution: 10'],
          [43.94755756, 4.803528915,'Le Caktus, Evalution: 10'],
          [43.939425085, 4.820624855,'Two Food, Evalution: 20'],
          [43.927468666, 4.838413628,'China Town, Evalution: 10'],
          [43.947534642, 4.809797584,'Bistrot Chez Antoine, Evalution: 20'],
          [43.935296456, 4.822387705,'Matto, Evalution: 20'],
          [43.94955312, 4.808162669,'La Floudiliz, Evalution: 20'],
          [43.943753455, 4.814898876,'Meatpacking, Evalution: 20'],
          [43.949282865, 4.811304521,'U Libecciu, Evalution: 10'],
          [43.948981624, 4.806166193,'Vert Citron, Evalution: 10'],
          [43.945073561, 4.805532175,'Le Régence, Evalution: 10'],
          [43.927183193, 4.809451973,'Le Bon Coin, Evalution: 20'],
          [43.949307434, 4.81112539,'Le Cubanito Café, Evalution: 10'],
          [43.930537729, 4.839822107,'Le Palais d\'Orient, Evalution: 10'],
          [43.948055717, 4.806587526,'Tanoshii, Evalution: 10'],
          [43.945032674, 4.809302911,'Chez AZ, Evalution: 20'],
          [43.948001079, 4.807093934,'Naka, Evalution: 10'],
          [43.948077168, 4.809685558,'Au Périgord Gourmand, Evalution: 20'],
          [43.946958379, 4.803281945,'La Cour d\'Honneur, Evalution: 10'],
          [43.94468633, 4.807527002,'Le Square, Evalution: 10'],
          [43.950432091, 4.805814164,'Festi Café, Evalution: 20'],
          [43.94481394, 4.814139082,'La Brasserie, Evalution: 20'],
          [43.9503417, 4.813144419,'Le Gilgamesh, Evalution: 20'],
          [43.931897071, 4.837392379,'Class\' Croute, Evalution: 10'],
          [43.945007556, 4.813837658,'Lacabanalolo, Evalution: 10'],
          [43.928727534, 4.822217029,'TAVERNE, Evalution: 10'],
          [43.945896977, 4.807646911,'Fou de FaFa, Evalution: 10'],
          [43.950111415, 4.812723635,'Subway, Evalution: 10'],
          [43.948593211, 4.810277379,'Françoise, Evalution: 10'],
          [43.921580937, 4.809289985,'Holly Food Burgers, Evalution: 10'],
          [43.947041802, 4.809495426,'Vin sur Vin, Evalution: 10'],
          [43.930847502, 4.877474132,'Le Lys, Evalution: 10'],
          [43.931897071, 4.837392379,'Mines de Saveurs, Evalution: 10'],
          [43.95088276, 4.818993771,'Le Bouillon de Culture, Evalution: 20'],
          [43.929997586, 4.836719859,'MEMPHIS 84 (SARL), Evalution: 10'],
          [43.930847502, 4.877474132,'Deux J & Cie, Evalution: 10'],
          [43.947370178, 4.803271861,'R&M\'S sur le Pouce, Evalution: 10'],
          [43.916097238, 4.889525742,'Rossini Foodies & Pasta, Evalution: 10'],
          [43.941976996, 4.823027794,'Le Carré, Evalution: 10'],
          [43.937875433, 4.809217529,'La Cabane D\'Oléron, Evalution: 20'],
          [43.94913747, 4.809925927,'Le Tire Bouchon, Evalution: 10'],
          [43.950769451, 4.812824843,'Au Jardin des Carmes, Evalution: 10'],
          [43.944427076, 4.807017294,'Ponja, Evalution: 10'],
          [43.947792979, 4.811004197,'Délices d\'Asie, Evalution: 10'],
          [43.951373033, 4.818624141,'Voisins d\'à côté (Les), Evalution: 10'],
          [43.930847502, 4.877474132,'Campanile, Evalution: 10'],
          [43.950191721, 4.804901825,'La Fourchette, Evalution: 10'],
          [43.945634789, 4.812596391,'La Salsa, Evalution: 10'],
          [43.928734318, 4.840316597,'A la bonne heure, Evalution: 10'],
          [43.952233668, 4.81611209,'Le Jardin de la Tour, Evalution: 20'],
          [43.949456129, 4.811797727,'Le Grill d\'Attila, Evalution: 10'],
          [43.948222747, 4.808247376,'Miam Miam, Evalution: 10'],
          [43.944957318, 4.809518528,'CAIRO FAST FOOD, Evalution: 20'],
          [43.947322875, 4.813174488,'Tam Tam, Evalution: 20'],
          [43.942586633, 4.805230831,'Pain Soleil & Cie, Evalution: 10'],
          [43.948814411, 4.811501254,'Bazou Resto Broc, Evalution: 10'],
          [43.925053223, 4.853763963,'Brit Hôtel Avignon Sud, Evalution: 10'],
          [43.949061564, 4.806186178,'Le Venaissin, Evalution: 10'],
          [43.944462645, 4.803668809,'Croq\'Nem Le Tai, Evalution: 20'],
          [43.949567421, 4.806287936,'Opéra Café, Evalution: 10'],
          [43.916137208, 4.889345694,'L\'Instant Appy, Evalution: 10'],
          [43.950092897, 4.80297557,'La Scène, Evalution: 20'],
          [43.945137549, 4.807197709,'Le Chat\'Touilleur, Evalution: 10'],
          [43.947289139, 4.807205959,'New Ground, Evalution: 10'],
          [43.937350647, 4.850524433,'La Terrasse d \'Eden, Evalution: 10'],
          [43.94776676, 4.808708863,'La Cuisine du Dimanche, Evalution: 10'],
          [43.944941143, 4.813500024,'L\'Offset, Evalution: 10'],
          [43.94605704, 4.805727807,'Sushishop Avignon, Evalution: 10'],
          [43.923487814, 4.820847603,'Le Diapason, Evalution: 10'],
          [43.965682395, 4.818443208,'Restaurant Parc des Libertés, Evalution: 10'],
          [43.950966183, 4.82584787,'L\'Amigo Pizza, Evalution: 20'],
          [43.948604111, 4.803957216,'Rossini Foodies & Pasta, Evalution: 10'],
          [43.947213966, 4.806868599,'L\'Hermitage, Evalution: 20'],
          [43.945141216, 4.813034043,'Shus Calada, Evalution: 20'],
          [43.916073953, 4.891176974,'Le Hom\' Art Café, Evalution: 10'],
          [43.948162792, 4.808925947,'Casa Castagno, Evalution: 10'],
          [43.940075494, 4.820184433,'Amigo, Evalution: 20'],
          [43.925053223, 4.853763963,'La Supérette Bio, Evalution: 20'],
          [43.949646077, 4.812197976,'Maestro, Evalution: 20'],
          [43.94635388, 4.814182169,'L\'Authentique, Evalution: 20'],
          [43.944482264, 4.807581823,'Little Italy, Evalution: 20'],
          [43.929370535, 4.790534673,'La Grande Muraille, Evalution: 10'],
          [43.928301596, 4.790183829,'Bug\'s Burger and Coffee, Evalution: 10'],
          [43.947173629, 4.809909793,'Le Bateau Ivre, Evalution: 20'],
          [43.948157108, 4.809295944,'Madame Croque, Evalution: 10'],
          [43.90078012, 4.895409663,'Quick, Evalution: 10'],
          [43.946965713, 4.808612605,'Le Bistrot du Cabestan, Evalution: 10'],
          [43.9497163, 4.812358222,'Bao Café, Evalution: 20'],
          [43.912336827, 4.880744261,'Tera Mia, Evalution: 20'],
          [43.948455965, 4.803972617,'Ma Belle Cuisine, Evalution: 20'],
          [43.95369005, 4.807869864,'Buvette du Rocher des Doms, Evalution: 10'],
          [43.947907021, 4.810676738,'Snack Chez Ammar et Fils, Evalution: 10'],
          [43.950117832, 4.807632244,'La Mirande, Evalution: 10'],
          [43.949865912, 4.806737688,'Restaurant Christian Etienne, Evalution: 10'],
          [43.937875433, 4.809217529,'Brasserie Le Kingston, Evalution: 10'],
          [43.951130096, 4.806351741,'Le Moutardier, Evalution: 10'],
          [43.919737085, 4.864682902,'Le Mini Snack, Evalution: 10'],
          [43.948697251, 4.811360076,'Chez Mimmo, Evalution: 10'],
          [43.945813554, 4.807582923,'Le Caveau du Théatre, Evalution: 10'],
          [43.947907388, 4.806756573,'Tapalocas, Evalution: 10'],
          [43.949670829, 4.808434941,'Le Saigonnais, Evalution: 10'],
          [43.949062847, 4.807236028,'Le Verso, Evalution: 10'],
          [43.947080122, 4.807247946,'Les Baguettes d\'Or, Evalution: 20'],
          [43.950132867, 4.802695598,'Les Acteurs / Tout Va Bien, Evalution: 20'],
          [43.937875433, 4.809217529,'Bistrot d\'U, Evalution: 10'],
          [43.948849667, 4.806411689,'Snack Favart, Evalution: 10'],
          [43.948752623, 4.804849937,'Jean Le Gourmand, Evalution: 20'],
          [43.94460639, 4.807566972,'Brasserie des Célestins, Evalution: 10'],
          [43.930157465, 4.835088245,'Restaurant Des Etoiles, Evalution: 20'],
          [43.93079515, 4.836905224,'Le TN7, Evalution: 10'],
          [43.930546981, 4.777998223,'Mc Donald\'s, Evalution: 10'],
          [43.944753802, 4.807572839,'Istanbul Kebap, Evalution: 10'],
          [43.948401294, 4.81022329,'Buvette I.D Halles, Evalution: 20'],
          [43.941493141, 4.824562234,'Le Jade, Evalution: 20'],
          [43.944903597, 4.805522091,'Brasserie du Théatre, Evalution: 10'],
          [43.91638082, 4.886771092,'Le Bistrot Trèfle, Evalution: 10'],
          [43.949851427, 4.80489174,'L\'Isle Sonnante, Evalution: 10'],
          [43.937350647, 4.850524433,'Le Paradou, Evalution: 10'],
          [43.945318147, 4.814137982,'Vezzo Pizza, Evalution: 10'],
          [43.946005401, 4.802126338,'Centre Hébergement et Réinsertion Sociale Saint François, Evalution: 10'],
          [43.951737345, 4.805747792,'Le 46, Evalution: 10'],
          [43.950432091, 4.805814164,'L\'Idylle du Palais, Evalution: 20'],
          [43.948695785, 4.80867366,'Little Odessa, Evalution: 20'],
          [43.937203713, 4.804916859,'Yakamoz, Evalution: 20'],
          [43.949021594, 4.806176277,'Le Petit Nice, Evalution: 20'],
          [43.949101717, 4.806196262,'Bar de l\'hôtel de ville, Evalution: 10'],
          [43.939878578, 4.797774537,'Le Best, Evalution: 20'],
          [43.95396374, 4.835040207,'Pizza du Sud, Evalution: 10'],
          [43.945806586, 4.807656995,'Avenio, Evalution: 10'],
          [43.946532828, 4.809095177,'Sawa, Evalution: 20']


        ]);

      var options = {
        mapType: 'styledMap',
        zoomLevel: 12,
        showTip: true,
        useMapTypeControl: true,
        maps: {
          // Your custom mapTypeId holding custom map styles.
          styledMap: {
            name: 'Styled Map', // This name will be displayed in the map type control.
            styles: [
              {featureType: 'poi.attraction',
               stylers: [{color: '#fce8b2'}]
              },
              {featureType: 'road.highway',
               stylers: [{hue: '#0277bd'}, {saturation: -50}]
              },
              {featureType: 'road.highway',
               elementType: 'labels.icon',
               stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
              },
              {featureType: 'landscape',
               stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
              }
        ]}}
      };

      var map = new google.visualization.Map(document.getElementById('map_div_avignon'));

      map.draw(data_avignon, options);
    }
  </script>

   <script type="text/javascript">

      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data3 = new google.visualization.arrayToDataTable([
          ['Arrondissements de Paris', 'Capital moyen'],
          ['01',     10000],
          ['02',      30000],
          ['03',    128000],
          ['04',  5000],
          ['05', 29000],
          ['06',    52000],
        ['08',    13000],
        ['10',    3000],
        ['11',    12000],
        ['12',    12000],
        ['13',    35000],
        ['14',    19000],
        ['15',    9000],
        ['16',    36000],
        ['17',    1000],
        ['19',    5000],
        ['20',    31000],

        ]);

        var options3 = {
          title: 'Capitaux des restaurants de Paris',
          width: 900,
          legend: { position: 'none' },
          chart: { title: 'Capital moyen par arrondissements',
                   subtitle: 'popularity by percentage' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Capital Moyen'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data3, options3);
      };
    </script>
    <script type="text/javascript">

      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Arrondissement ', 'Note moyenne'],
          ['01er',     22],
          ['02 ème',      16],
    ['03ème',    18],
          ['04ème',  16],
          ['05ème', 21],
          ['06ème',    15],
    ['08ème',    22],
    ['10ème',    20],
    ['11ème',    17],
    ['12ème',    17],
    ['13ème',    18],
    ['14ème',    15],
    ['15ème',    15],
    ['16ème',    19],
    ['17ème',    20],
    ['19ème',    12],
    ['20ème',    19],

        ]);

        var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Note moyenne des inspections par arrondissement de Paris ',
        pieStartAngle: 0,
      };


        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
      </script>

      <script type="text/javascript">
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Rating Yelp.fr');
      data.addColumn('number', 'Evaluation');

      data.addRows([
        [{v: [1], f: '1.0'}, 16],
        [{v: [2], f: '2.0'}, 15],
        [{v: [3], f:'3.0'}, 15],
        [{v: [4], f: '4.0'}, 15],
        [{v: [5], f: '5.0'}, 15],
      ]);

      var options = {
        title: 'Evaluation sanitaire du restaurant par rapport au rating Yelp.fr',
        hAxis: {
          title: 'Rating Yelp.fr',
          format: 'h',
          viewWindow: {
            min: [0],
            max: [6]
          }
        },
        vAxis: {
          title: 'Evaluation sanitaire '
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    };
    </script>
     <script type="text/javascript">
    google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Arrondissments', 'Note Evaluation sanitaire', 'Note Yelp.fr'],
        ['01er', 22, 3.8],
         ['02eme', 16, 3.63],
         ['03eme', 18, 3.74],
        ['04eme', 16, 3.65],
        ['05eme', 21, 3.92],
        ['06eme', 15, 3.87],
        ['08eme', 22, 3.46],
        ['10eme', 20, 3],
        ['11eme', 17, 3.77],
        ['12eme', 17, 3.71],
        ['13eme', 18, 3.52],
        ['14eme', 14, 4],
        ['15eme', 15, 3.87],
        ['16eme', 16, 3.46],
        ['17eme', 20, 3.2],
        ['19eme', 12, 3.45],
        ['20eme', 19, 3.48]
      ]);

      var options = {
        title: 'Evaluation moyenne des restaurants',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Total evaluation',
          minValue: 0,
        },
        vAxis: {
          title: 'Arrondissements'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_bar'));
      chart.draw(data, options);
    }
    </script>
     <script type="text/javascript">

      google.charts.setOnLoadCallback(drawStuff2);

      function drawStuff2() {
        var data = new google.visualization.arrayToDataTable([
          ['Capital', 'Note moyenne Yelp.fr'],
            ['0 €', 3.7],
            [' 1 000 €', 3.65],
            ['2 000 €', 3.72],
            ['3 000 €', 3.1],
            ['4 000 €', 4.07],
            ['5 000 €', 3.769],
            ['6 000 €', 3.766],
            ['7 000 €', 3.63],
            ['8 000 €', 3.7],
            ['10 000 €', 3.67],
            ['12 000 €', 3.1],
            ['15 000 €', 3.34],
            ['16 000 €', 4],
            ['20 000 €', 3.15],
            ['22 000 €', 4.5],
            ['23 000 €', 4.33],
            ['26 000 €', 4],
            ['30 000 €', 3.7],
            ['35 000 €', 3.45],
            ['37 000 €', 3.5],
            ['38 000 €', 4.25],
            ['40 000 €', 3.2],
            ['42 000 €', 3.2],
            ['50 000 €', 4.1],
            ['73 000 €', 3.5],
            ['87 000 €', 4.65],
            ['90 000 €', 3.9],
            ['100 000 €', 3.85],
            ['140 000 €', 3.5],
            ['152 000 €', 3.8],
            ['155 000 €', 3.55],
            ['200 000 €', 3.46],
            ['250 000 €', 3.25],
            ['258 000 €', 3.88],
            ['300 000 €', 4.5],
            ['304 000 €', 2.75],
            ['331 000 €', 4.3],
            ['355 000 €', 2.6],
            ['400 000 €', 2.9],
            ['532 000 €', 4.2],
            ['540 000 €', 3]]);

        var options = {
          title: 'Notes des restaurants',
          width: 900,
          legend: { position: 'none' },
          chart: { title: 'Notes des restaurants',
                   subtitle: 'Ratings moyen par capital' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Note moyenne Yelp.fr'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top'));
        chart.draw(data, options);
      };
    </script>
</head>
  <body>

  </body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head>

</head>
<body>
 <div id="columnchart_values" style="width: 900px; height: 600px;"></div>
</body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Pourcentage-de-type-d'&#233;talages-des-restaurants">Pourcentage de type d'&#233;talages des restaurants<a class="anchor-link" href="#Pourcentage-de-type-d'&#233;talages-des-restaurants">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head>

</head>
<body>
<div id="piechart" style="width: 900px; height: 500px;"></div>
</body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Datamarts-2-et-3:">Datamarts 2 et 3:<a class="anchor-link" href="#Datamarts-2-et-3:">&#182;</a></h2><h3 id="Localisation-et-&#201;valutions,-Paris">Localisation et &#201;valutions, Paris<a class="anchor-link" href="#Localisation-et-&#201;valutions,-Paris">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head>

</head>
<body>
<div id="map_div" style="height: 500px; width: 900px"></div>
</body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Localisation-et-&#201;valutions,-Avignon">Localisation et &#201;valutions, Avignon<a class="anchor-link" href="#Localisation-et-&#201;valutions,-Avignon">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>

</head>
<body>
<div id="map_div_avignon" style="height: 500px; width: 900px"></div>
</body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Le-capital-moyen-des-restaurants-de-Paris--par-arrondissement">Le capital moyen des restaurants de Paris  par arrondissement<a class="anchor-link" href="#Le-capital-moyen-des-restaurants-de-Paris--par-arrondissement">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head></head>
<body>
    <div id="top_x_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Evaluation-sanitaire-du-restaurant-par-rapport-au-rating-Yelp.fr">Evaluation sanitaire du restaurant par rapport au rating Yelp.fr<a class="anchor-link" href="#Evaluation-sanitaire-du-restaurant-par-rapport-au-rating-Yelp.fr">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head></head>
  <body>
 <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Notes-Yelp.fr-et-evaluation-sanitaire-par-arrondissement-de-Paris">Notes Yelp.fr et evaluation sanitaire par arrondissement de Paris<a class="anchor-link" href="#Notes-Yelp.fr-et-evaluation-sanitaire-par-arrondissement-de-Paris">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head>

</head>
<body>
<div id="chart_bar" style="height: 500px; width: 900px"></div>
</body>
</html>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Note-moyenne-sur-Yelp.fr-par-rapport-au-capitaux-des-restaurants">Note moyenne sur Yelp.fr par rapport au capitaux des restaurants<a class="anchor-link" href="#Note-moyenne-sur-Yelp.fr-par-rapport-au-capitaux-des-restaurants">&#182;</a></h3>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered">
<div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<html>
<head>

</head>
<body>
<div id="top" style="width: 900px; height: 800px;"></div>
</body>
</html>
</div>
</div>
</div>
    </div>
  </div>
</body>
</html>
