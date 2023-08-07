var ch = prompt("Enter the character" , "ENTER...");

switch(ch)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write(ch + " is a vowel");
        break;
    default:
        document.write(ch + " is a special character or constant");
        break;
}
