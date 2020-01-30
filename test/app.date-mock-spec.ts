import 'jest-date-mock'
import {advanceBy, advanceTo, clear} from "jest-date-mock";

advanceTo(Date.now());
advanceBy(1000);
clear();
