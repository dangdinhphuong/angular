export class Specifications {
    id:Number;
    id_moster: Number;
    Public_physics: Number;
    permission: Number;
    Max_HP: Number;
    armor: Number;
    magic_armor: Number;
    Attack_speed: Number;
    Cooldown_restriction: Number;
    critical_rate: Number;
    Speed_running: Number;
    Heal: Number;
    Energy_recovery: Number;
    Range_of_attack: Number;
    constructor(  id:Number,
        id_moster: Number,
        Public_physics: Number,
        permission: Number,
        Max_HP: Number,
        armor: Number,
        magic_armor: Number,
        Attack_speed: Number,
        Cooldown_restriction: Number,
        critical_rate: Number,
        Speed_running: Number,
        Heal: Number,
        Energy_recovery: Number,
        Range_of_attack: Number)
    {
        this.id=id,
        this.id_moster = id_moster;
        this.Public_physics = Public_physics;
        this.permission = permission;
        this.Max_HP = Max_HP;
        this.armor = armor;
        this.magic_armor = magic_armor;
        this.Attack_speed = Attack_speed;
        this.Cooldown_restriction = Cooldown_restriction;
        this.critical_rate = critical_rate;
        this.Speed_running = Speed_running;
        this.Heal = Heal;
        this.Energy_recovery = Energy_recovery;
        this.Range_of_attack = Range_of_attack;
    }
}

// Công vật lý
// công phép
// Máu tối đa
// giáp
// giáp phép
// Tốc đánh
// Giam hồi chiêu
// tỉ lệ chí mạng
// Tốc chạy
// Hồi máu /5s
// Hồi năng lượng/5s
// Tầm đánh
