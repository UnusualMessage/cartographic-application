namespace Identity.Core.Interfaces.Enums;

[Flags]
public enum Roles : byte
{
    Guest = 1,
    Monitor = 2,
    Moderator = 4,
    Admin = 8,
}