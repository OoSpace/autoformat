/**
 * Created by oospace on 2016/9/27.
 */
var argv = require('yargs').argv;
if (argv.l == 'zh-cn') {
    console.log('Chinese site!');
}else if(argv.l == 'en') {
    console.log('English website!');
};