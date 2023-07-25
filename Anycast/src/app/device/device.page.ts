import { Component, ChangeDetectorRef } from '@angular/core';
import { BleClient,BleDevice } from '@capacitor-community/bluetooth-le';
// import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le'

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage {
  devices: any[] = [];
  ble: boolean = false;
  scanText: string = '';
  connectedDevices: BleDevice[] = [];

  constructor(private change: ChangeDetectorRef) {}

  ngOnInit() {
    BleClient.initialize().then(() => {
      BleClient.isEnabled().then((res) => {
        this.ble = res;
      });
    });
  }

  toggleBle(event: any) {
    if (this.ble) {
      this.disableBluetooth();
    } else {
      this.enableBluetooth();
    }
  }

  enableBluetooth() {
    BleClient.enable().then(() => {
      this.ble = true;
    });
  }

  disableBluetooth() {
    BleClient.disable().then(() => {
      this.ble = false;
    });
  }
  
  // startScanning() {
  //   this.scanText = '기기 검색 중입니다. 잠시만 기다려주세요.';
  //   BleClient.requestLEScan({ allowDuplicates: false }, (res1: ScanResult) => {
  //     if (res1.localName) {
  //       this.devices.push(res1);
  //       this.change.detectChanges();
  //       this.showDeviceInfo(res1); // 기기 정보 표시
  //     }
  //   });
  //   setTimeout(() => {
  //     this.stopScanning();
  //   }, 20000);
  // }
  // startScanning() {
  //   this.scanText = '기기 검색 중입니다. 잠시만 기다려주세요.';
  //   BleClient.requestLEScan({ allowDuplicates: false, scanMode: ScanMode.SCAN_MODE_BALANCED }, (res1: ScanResult) => {
  //     if (res1.localName) {
  //       this.devices.push(res1);
  //       this.change.detectChanges();
  //       this.showDeviceInfo(res1); // 기기 정보 표시
  //     }
  //   });
  //   setTimeout(() => {
  //     this.stopScanning();
  //   }, 20000);
  // }

  // private showDeviceInfo(device: ScanResult) {
  //   const deviceInfo = `Device Name: ${device.localName}\n` +
  //                      `Device ID: ${device.device.deviceId}\n` +
  //                      `RSSI: ${device.rssi}\n` +
  //                      `Manufacturer Data: ${JSON.stringify(device.manufacturerData)}`+
  //                      `Service Data: ${JSON.stringify(device.serviceData)}`+
  //                      `UUID: ${JSON.stringify(device.uuids)}`+
  //                      `rawAdvertisement: ${JSON.stringify(device.rawAdvertisement)}`;
  //   alert(deviceInfo);
  // }

  startScanning() {
    this.scanText = '기기 검색 중입니다. 잠시만 기다려주세요.';
    BleClient.requestLEScan({ allowDuplicates: false }, (res1) => {
      if (res1.localName) {
        this.devices.push(res1);
        this.change.detectChanges();
      }
    });
    setTimeout(() => {
      this.stopScanning();
    }, 20000);
  }

  stopScanning() {
    BleClient.stopLEScan().then(() => {
      this.scanText = '';
    });
  }

  connect(device: any, index: number) {
    BleClient.connect(device.device.deviceId).then(() => {
      this.devices[index]['connection'] = true;
      this.change.detectChanges();
      alert('등록되었습니다!');

      BleClient.getConnectedDevices([]).then((connectedDevices: BleDevice[]) => {
        // 연결된 기기 목록을 사용하여 필요한 동작 수행
        this.connectedDevices = connectedDevices;
        this.change.detectChanges();

        console.log('Connected devices:', connectedDevices);
        alert('Connected devices: ' + JSON.stringify(connectedDevices));
        
        // 각 기기의 UUID를 알림으로 표시
        const deviceUUIDs = connectedDevices.map(device => device.deviceId).join('\n');
        alert('Connected devices UUIDs:\n' + deviceUUIDs);
        const deviceName = connectedDevices.map(device => device.name).join('\n');
        alert('Connected devices Names:\n' + deviceName);
        // 현재 connect 버튼을 누른 기기의 UUID만 표시
        const connectedDevice = connectedDevices.find(d => d.deviceId === device.device.deviceId);
        if (connectedDevice) {
          alert('Connected device UUID:\n' + connectedDevice.deviceId);
        }
      }).catch((error) => {
        console.error('Error getting connected devices:', error);
      });
    }, (err) => {
      alert(err);
    });
  }
  // connect(device: any, index: number) {
  //   BleClient.connect(device.device.deviceId).then(() => {
  //     this.devices[index]['connection'] = true;
  //     this.change.detectChanges();
  //     alert('등록되었습니다!');

  //     BleClient.getConnectedDevices([]).then((connectedDevices: BleDevice[]) => {
  //       this.connectedDevices = connectedDevices;
  //       this.change.detectChanges();

  //       console.log('Connected devices:', connectedDevices);
  //       alert('Connected devices: ' + JSON.stringify(connectedDevices));

  //       const connectedDevice = connectedDevices.find(d => d.deviceId === device.device.deviceId);
  //       if (connectedDevice) {
  //         this.getDeviceInformation(connectedDevice); // 기기 정보 가져오기
  //       }
  //     }).catch((error) => {
  //       console.error('Error getting connected devices:', error);
  //     });
  //   }, (err) => {
  //     alert(err);
  //   });
  // }

  // private getDeviceInformation(device: BleDevice) {
  //   BleClient.getConnectedDevices([]).then((connectedDevices: BleDevice[]) => {
  //     const filteredDevices = connectedDevices.filter((d) => d.deviceId === device.deviceId);
  //     if (filteredDevices.length > 0) {
  //       const deviceData = filteredDevices[0];
  //       console.log('Device information:', deviceData);
  //       this.showDeviceInfo(deviceData); // 기기 정보 표시
  //     }
  //   }).catch((error: any) => {
  //     console.error('Error getting device information:', error);
  //   });
  // }


  // private showDeviceInfo(deviceInfo: any) {
  //   const deviceInfoStr = JSON.stringify(deviceInfo, null, 2);
  //   alert(deviceInfoStr);
  // }

  disconnect(device: any, index: number) {
    BleClient.disconnect(device.device.deviceId).then(() => {
      this.devices[index]['connection'] = false;
      this.change.detectChanges();
      alert('등록해제 되었습니다!');

      BleClient.getConnectedDevices([]).then((connectedDevices: BleDevice[]) => {
        // 연결된 기기 목록을 사용하여 필요한 동작 수행
        this.connectedDevices = connectedDevices;
        this.change.detectChanges();

        console.log('Connected devices:', connectedDevices);
        alert('Connected devices: ' + JSON.stringify(connectedDevices));
      }).catch((error) => {
        console.error('Error getting connected devices:', error);
      });
    });
  }
}

