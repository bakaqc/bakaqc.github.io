import React from 'react';

interface ProjectItemProps {
    item: {
        id: number;
        image: string;
        title: string;
        github: string;
    };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item }) => {
    return (
        <>
            <div className="project__card" key={item.id}>
                <img src={item.image} alt={item.title} className="project__img" />
                <h3 className="project__title">{item.title}</h3>

                <a href={item.github} className="project__button" target="_blank">
                    View Detail <i className="bx bx-right-arrow-alt project__button-icon"></i>
                </a>
            </div>
        </>
    );
};

export default ProjectItem;
