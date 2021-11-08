import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";
import {act} from 'react-dom/test-utils';
import {updateProfileStatus} from "../../../redux/profilePageReducer";


describe("ProfileStatus Component", () => {
    test("status from props should be in state", () => {
        let testRenderer = create(<ProfileStatus status="statustest" />);
        let instance = testRenderer.root;
        expect(instance.props.status).toBe("statustest");
    });
    test("after creation span should be displayed with correct status", () => {
        let testRenderer = create(<ProfileStatus status="statustest" />);
        let root = testRenderer.root;
        let span = root.findByType('span');
        expect(span._fiber.stateNode.children.length).not.toBeNull();
    });
    test("after creation span should have correct status text", () => {
        let testRenderer = create(<ProfileStatus status={"statustest"} />);
        let root = testRenderer.root;
        let span = root.findByType('span');
        expect(span.props.children).toBe("statustest");
    });
    test("after creation input should not be installed", () => {
        let testRenderer = create(<ProfileStatus status={"statustest"} />);
        let root = testRenderer.root;
        expect(() => {
            let span = root.findByType('input');
        }).toThrow();
    });
    test("input should be displayed in edit mode", () => {
        let testRenderer = create(<ProfileStatus status={"statustest"} />);
        let root = testRenderer.root;
        let span = root.findByType('span');
        act(() => span.props.onDoubleClick());
        let input = root.findByType('input');
        expect(input.props.value).toBe("statustest");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        let testRenderer = create(<ProfileStatus status={"statustest"} updateProfileStatus={mockCallback}/>);
        let root = testRenderer.root;
        root.props.updateProfileStatus();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
