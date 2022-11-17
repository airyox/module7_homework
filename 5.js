class Appliance {
    constructor(price, name) {
        this.name = name
        this.needElectricity = true,
        this.inSocket = false,
        this.price = price
    }

    showPower(amperage) {
        const power = amperage * 220;
        console.log(`������������ �������� ��������: ${power}`);
    }
}

class HomeAppliance extends Appliance {
    constructor(price, name) {
        super(price, name),
        this.price = price,
        this.name = name,
        this.description = "������� �������",
        this.inSocket = true
    }
}

class LightingEquipment extends Appliance {
    constructor(price, name) {
        super(price, name),
        this.price = price,
        this.name = name,
        this.inSocket = true,
        this.description = "���������"
    }
}
class Device extends Appliance {
    constructor(price, name) {
        super(price, name)
        this.name = name,
        this.description = "�������",
        this.autonomy = true,
        this.portability = true,
        this.price = price
    }
}

const fridge = new HomeAppliance(25000, '�����������');
fridge.showPower(0.7);
const phone = new Device(20000, '�������');
console.log(phone.price);
const tableLamp = new LightingEquipment(1500, '���������� �����');
console.log(tableLamp.needElectricity);
console.log(fridge, phone, tableLamp);