
class Animal{
    dog(){
        console.log("dog makes sound bho bho");
    }
    cat(){
        console.log("cat makes sound maow maow");
    }
}
class wild extends Animal{
    tigher(){
        console.log("Tigher makes sound rour");
    }
}
const animal= new Animal();
animal.dog();
animal.cat();

const Wild= new wild();
Wild.tigher();
Wild.cat();
Wild.dog();