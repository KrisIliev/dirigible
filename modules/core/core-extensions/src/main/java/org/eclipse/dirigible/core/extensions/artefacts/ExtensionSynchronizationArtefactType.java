/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
package org.eclipse.dirigible.core.extensions.artefacts;

import org.eclipse.dirigible.core.scheduler.api.AbstractSynchronizationArtefactType;

public class ExtensionSynchronizationArtefactType extends AbstractSynchronizationArtefactType {

	@Override
	public String getId() {
		return "Extension";
	}

	@Override
	protected String getArtefactStateMessage(ArtefactState state) {
		switch (state) {
		case FAILED_CREATE:
			return "Create extension has failed";
		case FAILED_CREATE_UPDATE:
			return "Create or update extension has failed";
		case FAILED_UPDATE:
			return "Update extension has failed";
		case SUCCESSFUL_CREATE:
			return "Create extension was successful";
		case SUCCESSFUL_CREATE_UPDATE:
			return "Create or update extension was successful";
		case SUCCESSFUL_UPDATE:
			return "Update extension was successful";
		default:
			return state.getValue();
		}
	}

}
