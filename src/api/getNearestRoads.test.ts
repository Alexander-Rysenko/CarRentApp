import '@testing-library/jest-dom'
import { mocked } from "jest-mock";
import { getNearestRoads } from './api';
import { iNearestRoadsApiTypes } from "../types/[types].ts";

jest.mock('./api');

describe('getNearestRoads function', () => {
  it('should fetch data successfully from an API', async () => {
    const mockData: iNearestRoadsApiTypes = {
      snappedPoints: [
        {
          location: {
            latitude: 24.34481638461524,
            longitude: 54.50228696435262
          },
          originalIndex: 0,
          placeId: "ChIJvQe_qr1AXj4RJz-baqoTTRo"
        }
      ]
    };

    const mockLat: number = 24.34481638461524;
    const mockLng: number = 54.50228696435262;

    mocked(getNearestRoads).mockImplementation(() => Promise.resolve(mockData));

    const roadList: iNearestRoadsApiTypes | undefined = await getNearestRoads(mockLat, mockLng);

    expect(roadList).toEqual(mockData);
  });
});
