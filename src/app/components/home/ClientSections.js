'use client';

import Experience from './experience/index'
import Education from './education/index'
import Skills from './skills/index';
import Projects from './projects/index';

export default function ClientSections() {
	return (
		<>
			<Experience />
			<Skills />
			<Projects />
			<Education />
		</>
	);
}