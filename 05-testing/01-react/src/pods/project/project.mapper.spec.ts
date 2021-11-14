import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper spec', () => {
  it('should return "viewModel" copy interface', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Peter',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jason' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Peter',
      externalId: 'test external id',
      comments: 'test comment',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Jason' }],
    });
  });
})
