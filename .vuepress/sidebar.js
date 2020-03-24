const DEVELOPMENT = '/development';
const CSS = `${ DEVELOPMENT }/CSS`;
const TERM = `${ DEVELOPMENT }/Term`;
const TOOLS = `${ DEVELOPMENT }/Tools`;
const DESIGN_PATTERN = `${ DEVELOPMENT }/DesignPattern`;
const JAVASCRIPT = `${ DEVELOPMENT }/JavaScript`;
const REACT = `${ DEVELOPMENT }/React`;
const INTERVIEW = `${ DEVELOPMENT }/Interview`;
const STUDY_MONEY = `${ DEVELOPMENT }/StudyMoneyProject`;
const REACT_NATIVE = `${ DEVELOPMENT }/ReactNative`;
const SQL = `${ DEVELOPMENT }/SQL`;
const JAVA = `${ DEVELOPMENT }/Java`;
const ALGORITHM = `${ DEVELOPMENT }/Algorithm`;


const REACT_REAL_PROGRAMMING = `${ REACT }/실전리액트프로그래밍`;
const REACT_I18NEXT = `${ REACT }/i18next`;
const REACT_ETC = `${ REACT }/etc`;

const TOOLS_GIT = `${ TOOLS }/Git`;

const INTERVEIW_개발상식 = `${ INTERVIEW }/개발상식`;

module.exports = [
	{ title: 'Home', path: '/' },
	{
		title: 'JavaScript',
		children: [
			{ title: '알아야 할 13가지 유용한 Javascript 배열 방법과 트릭', path: `${ JAVASCRIPT }/JavascriptArray` },
			{ title: 'clean-code-javascript', path: `${ JAVASCRIPT }/CleanCodeJavascript` },
			{ title: 'Object.assign()', path: `${ JAVASCRIPT }/ObjectAssign` },
		]
	},
	{
		title: 'React',
		children: [
			{
				title: '실전 리액트 프로그래밍',
				children: [
					{ title: '1장 리액트 프로젝트 시작하기', path: `${ REACT_REAL_PROGRAMMING }/1` },
					{ title: '2장 ES6', path: `${ REACT_REAL_PROGRAMMING }/2` },
					{ title: '3장 리액트 개념', path: `${ REACT_REAL_PROGRAMMING }/3` },
					{ title: '1장 리액트 8장 서버사이드렌더링 & Next.js', path: `${ REACT_REAL_PROGRAMMING }/8` }
				]
			},
			{
				title: 'i18next',
				children: [
					{ title: 'ConfigureOptions', path: `${ REACT_I18NEXT }/ConfigureOptions` },
					{ title: 'interpolation', path: `${ REACT_I18NEXT }/interpolation` },
				]
			},
			{
				title: 'ETC',
				children: [
					{ title: 'Restrict Router', path: `${ REACT_ETC }/RestrictRouter` },
					{ title: 'locale 언어', path: `${ REACT_ETC }/locale` },
					{ title: 'Dotenv', path: `${ REACT_ETC }/Dotenv` },
					{ title: 'function component와 class component', path: `${ REACT_ETC }/FunctionClassComponent` },
				]
			}
		]
	},
	{
		title: 'CSS',
		children: [
			{ title: 'CSS background-image 의 안티 패턴', path: `${ CSS }/backgroundImage` }
		]
	},
	{
		title: 'TERM',
		children: [
			{ title: 'AJAX', path: `${ TERM }/AJAX` },
			{ title: 'XHR', path: `${ TERM }/XHR` },
			{ title: '순수함수 Pure Component', path: `${ TERM }/PureComponent` },
			{ title: 'Zero-dependency Module', path: `${ TERM }/ZeroDependencyModule` },
			{ title: '명령형 프로그래밍과 함수형 프로그래밍', path: `${ TERM }/JavascriptFunctionalProgramming` }
		]
	},
	{
		title: 'Tools',
		children: [
			{ title: '개발환경', path: `${ TOOLS }/Environment` },
			{ title: 'Markdown', path: `${ TOOLS }/Markdown` },
			{ title: 'iterm2 세팅하기', path: `${ TOOLS }/Iterm2Setting` },
			{ title: 'node.js 설치하기', path: `${ TOOLS }/NodeJS` },
			{ title: 'yarn 설치하기', path: `${ TOOLS }/yarn` },
			{ title: '웹스톰', path: `` },
			{ title: 'vsCode', path: `` },
			{
				title: 'Git',
				children: [
					{ title: 'Git 사용 중 자주 만나는 이슈 정리', path: `${ TOOLS_GIT }/git` },
					{ title: '깃 사용자가 가장 흔히 저지르는 6가지 실수와 대처 방법', path: `${ TOOLS_GIT }/MistakesGit6` },
				]
			},
			{ title: 'Ngnix', path: `${ TOOLS }/Ngnix` },
			{ title: 'https', path: `${ TOOLS }/https` },
			{ title: '인증서 mkcert', path: `` },
			{ title: 'POSTMAN', path: `` },
			{ title: 'api-docs spec document', path: '' },
			{ title: 'Mac Terminal Command', path: `${ TOOLS }/MacTerminalCommand` },
			{ title: '메신저 서비스들의 메시지 관리방식', path: `${ TOOLS }/ChattingService` },
		]
	},
	{
		title: 'Design Patterns',
		children: [
			{ title: '상속과 조합', path: `${ DESIGN_PATTERN }/CompositionAndInheritance` }
		]
	},
	{
		title: 'Interview',
		children: [
			{
				title: '개발상식',
				children: [
					{ title: '객체지향 프로그래밍', path: `${ INTERVEIW_개발상식 }/객체지향프로그래밍` },
					{ title: 'RESTful API', path: `${ INTERVEIW_개발상식 }/RESTfulAPI` }
				]
			},
			{ title: '네트워크', path: `` },
			{ title: '데이터베이스', path: `` },
			{ title: '디자인패턴', path: `` },
			{ title: '알고리즘', path: `` },
			{ title: '운영체제', path: `` },
			{ title: '자료구조', path: `` },
		]
	},
	{
		title: 'ETC',
		children: []
	},
	{
		title: 'Study Money Project',
		children: [
			{ title: 'Intro', path: `${ STUDY_MONEY }/Intro` },
			{ title: 'Pomodoro 기법', path: `${ STUDY_MONEY }/Pomodoro기법` },
		]
	},
	{
		title: 'React Native',
		children: [
			{ title: '우아한 형제들', path: `${ REACT_NATIVE }/우아한형제들` },
			{ title: 'React Native 시작전 고려사항', path: `${ REACT_NATIVE }/ReactNative_시작전_고려사항` },
		]
	},
	{
		title: 'SQL',
		children: [
			{ title: 'SQL Cheat Sheet', path: `${ SQL }/SQL_Cheat_Sheet` },
			{title: 'Managing Hierarchical Data in MySQL', path: `${SQL}/ManagingHierarchicalData_in_MySQL`}
		]
	},
	{
		title: 'Java',
		children: [
			{ title: 'Mac에 Java 여러 버전 설치 & 사용하기', path: `${ JAVA }/Mac_Java_여러버전설치` }
		]
	},
	{
		title: 'Algorithm',
		children: [
			{ title: '프로그래머스 문제 모음', path: `${ALGORITHM}/JavaScript`}
		]
	}
];

