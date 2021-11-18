import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('mapper specs', () => {

    it('should return empty array on employees, when it feeds undefined', () => {
        // Arrange
        const member: apiModel.Project = undefined;

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result.employees).toEqual([]);
    });

    it('should return a clone empty object when it feeds undefined', () => {
        // Arrange
        const member: apiModel.Project = undefined;

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '',
            name: '',
            externalId: '',
            comments: '',
            isActive: false,
            employees: [],
        });
    });

    it('should return empty object when it feeds null', () => {
        // Arrange
        const member: apiModel.Project = null;

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '',
            name: '',
            externalId: '',
            comments: '',
            isActive: false,
            employees: [],
        });
    });

    it('should clone the object when mapProjectFromApiToVm is called', () => {
        // Arrange
        const member: apiModel.Project = {
            id: '01',
            name: 'Peter',
            externalId: 'test external id',
            comments: 'test comments',
            isActive: true,
            employees: [{ id: '03', isAssigned: false, employeeName: 'Jasson' }],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '01',
            name: 'Peter',
            externalId: 'test external id',
            comments: 'test comments',
            isActive: true,
            employees: [{ id: '03', isAssigned: false, employeeName: 'Jasson' }],
        });
    });

    it('should pass when "externalId?" property is not included ', () => {
        // Arrange
        const member: apiModel.Project = {
            id: '01',
            name: 'Peter',
            comments: 'test comments',
            isActive: true,
            employees: [],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '01',
            name: 'Peter',
            comments: 'test comments',
            isActive: true,
            employees: [],
        });
    });

    it('should pass when "comments?" is not included', () => {
        // Arrange
        const member: apiModel.Project = {
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [],
        });
    });

    it('should pass when "isAssigned?" on employess property is not included', () => {
        // Arrange
        const member: apiModel.Project = {
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [{ id: '02', employeeName: 'Jasson' }],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [{ id: '02', employeeName: 'Jasson' }],
        });
    });

    it('should pass when properties are "null"', () => {
        // Arrange
        const member: apiModel.Project = {
            id: null,
            name: null,
            isActive: null,
            employees: [{ id: null, isAssigned: null, employeeName: null }],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: null,
            name: null,
            isActive: null,
            employees: [{ id: null, isAssigned: null, employeeName: null }],
        });
    });

    it('should pass when properties are "undefined"', () => {
        // Arrange
        const member: apiModel.Project = {
            id: undefined,
            name: undefined,
            isActive: undefined,
            employees: [
                { id: undefined, isAssigned: undefined, employeeName: undefined },
            ],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: undefined,
            name: undefined,
            isActive: undefined,
            employees: [
                { id: undefined, isAssigned: undefined, employeeName: undefined },
            ],
        });
    });

    it('should return an Array on "employees" property when "null" is passed', () => {
        // Arrange
        const member: apiModel.Project = {
            id: null,
            name: null,
            isActive: null,
            employees: null,
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: null,
            name: null,
            isActive: null,
            employees: [],
        });
    });

    it('should return an Array on "employees" property when "undefined" is passed', () => {
        // Arrange
        const member: apiModel.Project = {
            id: undefined,
            name: undefined,
            isActive: undefined,
            employees: undefined,
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: undefined,
            name: undefined,
            isActive: undefined,
            employees: [],
        });
    });

    it('return all undefined properties on object on employee property when we passed a undefined field', () => {
        // Arrange
        const member: apiModel.Project = {
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [
                { id: '02', isAssigned: false, employeeName: 'Jasson' },
                undefined,
            ],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [
                { id: '02', isAssigned: false, employeeName: 'Jasson' },
                { id: undefined, isAssigned: undefined, employeeName: undefined },
            ],
        });
    });

    it('return all undefined properties on object on employee property when we passed a null field', () => {
        // Arrange
        const member: apiModel.Project = {
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [
                { id: '02', isAssigned: false, employeeName: 'Jasson' },
                null,
            ],
        };

        // Act
        const result: viewModel.Project = mapProjectFromApiToVm(member);

        // Assert
        expect(result).toEqual<viewModel.Project>({
            id: '01',
            name: 'Peter',
            isActive: true,
            employees: [
                { id: '02', isAssigned: false, employeeName: 'Jasson' },
                { id: undefined, isAssigned: undefined, employeeName: undefined },
            ],
        });
    });
});