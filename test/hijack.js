/**
 * Created by oospace on 2016/9/29.
 */
const hijack = (obj, method, fun) => {
    let orig = obj[method]
    obj[method] = fun(orig)
}
hijack(window, 'confirm', (orig) => {
    return (text) => {
        alert('HELP ME PLZ!!!')
        if (orig.call(this, text)) {
            alert('YOU SEEMS FINE AND I AM LEAVING, GOOD BYE!')
        } else {
            alert('HOLD ON! I AM COMING!!')
        }
    }
})
