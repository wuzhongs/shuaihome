import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "status":0,
    "data":{
        "user":{
            "id|1-3":0,
            "userName":"@cname",
            "age":18
        }
    },
    "msg":"获取成功"
});