// Centralized image asset registry ensuring 100% reliable bundling across Vite dev & production
import commercialWarehouse from './images/commercial_warehouse_1794217518984.jpg';
import federalLogistics from './images/federal_logistics_1794217519367.jpg';
import freightIntermodalHub from './images/freight_intermodal_hub_1794218266955.jpg';
import heroBgCustom from './images/hero_bg_custom.jpg';
import heroFreightTruck from './images/hero_freight_truck_1794217516825.jpg';
import logisticsDispatchCenter from './images/logistics_dispatch_center_1794218267949.jpg';
import truckFleet from './images/truck_fleet_1794217519362.jpg';
import warehouseOperations from './images/warehouse_operations_1794217518003.jpg';

export const IMAGES = {
  commercialWarehouse,
  federalLogistics,
  freightIntermodalHub,
  heroBgCustom,
  heroFreightTruck,
  logisticsDispatchCenter,
  truckFleet,
  warehouseOperations,
} as const;

export default IMAGES;
