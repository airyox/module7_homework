function Appliance(price, name) {
    this.needElectricity = true,
    this.inSocket = false,
    this.price = price,
    this.name = name
};

Appliance.prototype.showPower = function(amperage) {
    const power = amperage * 220;
    console.log(`������������ �������� ��������: ${power}`);
};

function HomeAppliance(price, name) {
    this.name = name,
    this.description = "������� �������",
    this.inSocket = true,
    this.price = price
};

function LightingEquipment(price, name) {
    this.name = name,
    this.description = "���������",
    this.inSocket = true,
    this.price = price
};

function Device(price, name) {
    this.name = name,
    this.description = "�������",
    this.autonomy = true,
    this.portability = true,
    this.price = price
}

HomeAppliance.prototype = new Appliance();
LightingEquipment.prototype = new Appliance();
Device.prototype = new Appliance();

const fridge = new HomeAppliance(25000, '�����������');
fridge.showPower(0.7);
const phone = new Device(20000, '�������');
console.log(phone.price);
const tableLamp = new LightingEquipment(1500, '���������� �����');
console.log(tableLamp.needElectricity);
console.log(fridge, phone, tableLamp);