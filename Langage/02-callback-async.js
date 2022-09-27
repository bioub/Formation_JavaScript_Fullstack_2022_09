setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appel
// ^
// |
// |
// |                                    lg              lg      lg               lg
// |st - st - st - st - lg ..⟳..        taskB ..⟳..     taskA - taskD ..⟳..      taskC
// +-----0-------------------------------7ms------------500ms---------------------1s-------> temps
//                      E               B               A       D                C

// file d'attente de taches (0ms) : taskB
// file d'attente de taches (7ms) :
// file d'attente de taches (500ms) : taskA - taskD
// file d'attente de taches (501ms) : taskD
// file d'attente de taches (502ms) :
// file d'attente de taches (1000ms) : taskC
// file d'attente de taches (1001ms) :


// coté C++ a été programmé une boucle d'événements
// do {
//   executeJs()
// }
// while(thereIsOrMightBeTaskInQueue());

// Jake Archibald (Google)
// Conférence : In The Loop (JSconf.Asia 2018)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
