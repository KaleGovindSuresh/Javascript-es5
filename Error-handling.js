// Error Handling:- 

// Error? 
//   An error is an unexpected situation/problem occured in the program that stops 
//   program execution. 


//   Error Handling:- 
//     You need to handle the errors for 
//     - preventing termination of the program execution 
//     - to execute alternative solution for the error 
//     - to display user friendly error messages 


//     How to handle the error? 

//     For error handling you requires 
//     1. try block 
//     2. catch block 
//     3. finally block 
//     4. throw keyword 




//     try block:- 

//     - It is used to write the statements which may raise an error. 
//     - it must be immediately followed by either catch() or finally block 
//     - If error raises then an error object will be created and the catch 
//     block will be called by passing that error object as an argument. 
//     - All the statements of the try block after the errored statement will 
//     not get executed even after error handling 
    
//     Example: 

//         try{
//           statements 
//         }catch(err){

//         }



//    catch block
   
//         - it must be after the try block 
//         - it will get called only if the error raises in the try block 
//         - it accepts the error object as parameter 
//         - it prevents termination of the program 
//         - it provides the alternative solution to the errored statement 
//         - it is used to display user friendly messages
//         - without catch block error cannot be handled 

//    finally block :-
   
//         - it will always gets executed despite error raised or not 
//         - it is used to perform resouces cleaning operations like closing 
//         the files or database connection, etc. 
