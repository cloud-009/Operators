class Employee {
    id;
    name;
    sal;
    info=(eid,ename,esal)=>{
        this.id=eid;
        this.name=ename;
        this.sal=esal;
    }
    getinfo=()=>{
        console.log(this.id+'::'+this.name+'::'+this.sal);
    }
}
export {Employee}