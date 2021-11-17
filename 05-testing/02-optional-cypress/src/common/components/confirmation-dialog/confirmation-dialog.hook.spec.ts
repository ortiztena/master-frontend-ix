import { renderHook, act } from '@testing-library/react-hooks';
import { createEmptyLookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe(' # confirmation-dialog.hook specs', () => {
    it('should render and return five components with their functionality', () => {
        // Arrange 
        const { result } = renderHook(() => useConfirmationDialog());
        //Assert
        //Act
        expect(result.current.onAccept).toEqual(expect.any(Function))
        expect(result.current.onClose).toEqual(expect.any(Function))
        expect(result.current.isOpen).toBeFalsy()
        expect(result.current.onOpenDialog).toEqual(expect.any(Function))
        expect(result.current.itemToDelete).toEqual(createEmptyLookup())
    })
})

it('should set the state to a valid user, and change it after on #onAccept', () => {
    // Arrange 
    const user = { id: 'John', name: 'Doe' };
    const emptyUser = { id: '', name: '' };
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    result.current.itemToDelete = user
    act(() => {
        result.current.onAccept();
    })
    //Act
    expect(result.current.itemToDelete).toMatchObject(emptyUser)
})

it('should set the state to true, and change it after with #onClose', () => {
    // Arrange 
    const user = { id: 'John', name: 'Doe' };

    const { result } = renderHook(() => useConfirmationDialog());
    //Assert

    act(() => {
        result.current.onOpenDialog(user)
        result.current.onClose();
    })
    //Act
    expect(result.current.isOpen).toBe(false)
})

it('should set the state to true when you pass in an user on #onOpenDialog', () => {
    // Arrange 
    const user = { id: 'John', name: 'Doe' };
    const emptyUser = { id: '', name: '' };
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    act(() => {
        result.current.onOpenDialog(user)
    })

    //Act
    expect(result.current.isOpen).toBeTruthy()

})