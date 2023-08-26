/* class car{
    constructor(obtions){
        this.name=obtions.name
        this.airbag=obtions.airbag
        this.massa=obtions.massa
    }
    speed(){
        console.log('100km/h');
    }
}
const BMW=new car({
    name:'BMW',
    airbag:true,
    massa:10
})
BMW.speed()
class bus extends car{
    constructor(obtions){
        super(obtions)
            this.passajirSoni=obtions.passajirSoni
        
    }
    speed(){
        super.speed()
        console.log('50km/h ');
    }
    get passajirSoniInfo(){
        return this.passajirSoni*2
    }
    set massaInfo(newvalue){
        this.massa=newValue
    }

}
const man=new bus({
    name:'man',
    airbag:true,
    massa:23,
    passajirSoni:100
}) */
/* man() */
/* class component{
    constructor(selector){
        this.$el= document.querySelector(selector)
    }
    showElement(){
        this.$el.style.display='block'
    }
    hideElement(){
        this.$el.style.display='none'
    }
}
 class square extends component{
    constructor(options){
        super(options.selector);
        this.$el.style.width=this.$el.style.height=options.size+"px";
        this.$el.style.background=options.color;
        this.$el.style.borderRadius = options.radius+"%";
    }

 }
 const square1=new square ({
    selector:"#square1",
    size:100,
    color:"red",
    radius:50
 })
 const square2=new square ({
    selector:"#square2",
    size:100,
    color:"blue",
    radius:50
 })
 class circle extends component{
    constructor(options){
        super(options.selector);
        this.$el.style.padding=options.padding+"px";
        this.$el.style.background=options.color;
        this.$el.style.width=this.$el.style.height=options.size+"px";
        this.$el.style.borderRadius=options.radius+"%";
    }
 }
 const circle1= new circle({
    selector:"#circle1",
    padding:20,
    size:100,
    radius:50,
    color:"black"
 }) */
 function user(name,id){
    this.name=name;
    this.id=id;
    this.human=true;
 }
const sunnat=new user("Sunnat",1)
console.log(sunnat);
