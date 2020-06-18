const STORAGE_KEY = 'mall';

export default{
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name,val)
        }else{
            let val = this.getStorage
            val[key] = value
            window.sessionStorage(STORAGE_KEY,JSON.stringify(val[key]))
        }
    },
    //获取某一个模块下面的属性user下面的userName
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            if(val){
                return val[key]
            }
        }
        return this.getStorage()[key]
    },
     
    getStorage(){
       return JSON.parse( window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clean(key,module_name){
        let val = this.getStorage();
        if(module_name){
            if(!val[module_name]) return; 
            delete val[module][key];    
        }else{
            delete val[key]
        }
        window.sessionStorage(STORAGE_KEY,JSON.stringify(val[key]))
    }
}
