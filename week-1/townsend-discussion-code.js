function Sandwhich(component1, component2) {
    this.component1 = component1;
    this.component2 = component2;
}

var pb = new Sandwhich('Peant butter', 'Jelly','Bread');
console.log(pb);

Sandwhich.prototype.component3 = 'Bread';

console.log(pb.component3);


