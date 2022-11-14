namespace Identity.Core.Interfaces.Enums;

[Flags]
public enum Roles : byte
{
    Monitor = 1,
    Moderator = 2,
    Admin = 4
}