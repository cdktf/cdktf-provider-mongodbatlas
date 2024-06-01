# `alertConfiguration` Submodule <a name="`alertConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.alertConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertConfiguration <a name="AlertConfiguration" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration mongodbatlas_alert_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfiguration;

AlertConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eventType(java.lang.String)
    .projectId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .matcher(IResolvable)
//  .matcher(java.util.List<AlertConfigurationMatcher>)
//  .metricThresholdConfig(IResolvable)
//  .metricThresholdConfig(java.util.List<AlertConfigurationMetricThresholdConfig>)
//  .notification(IResolvable)
//  .notification(java.util.List<AlertConfigurationNotification>)
//  .thresholdConfig(IResolvable)
//  .thresholdConfig(java.util.List<AlertConfigurationThresholdConfig>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.eventType">eventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.matcher">matcher</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>></code> | matcher block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.metricThresholdConfig">metricThresholdConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>></code> | metric_threshold_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.notification">notification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>></code> | notification block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.thresholdConfig">thresholdConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>></code> | threshold_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.eventType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.matcher"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#matcher AlertConfiguration#matcher}

---

##### `metricThresholdConfig`<sup>Optional</sup> <a name="metricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.metricThresholdConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>>

metric_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#metric_threshold_config AlertConfiguration#metric_threshold_config}

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.notification"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#notification AlertConfiguration#notification}

---

##### `thresholdConfig`<sup>Optional</sup> <a name="thresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.Initializer.parameter.thresholdConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>>

threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold_config AlertConfiguration#threshold_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher">putMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig">putMetricThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig">putThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThresholdConfig">resetMetricThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThresholdConfig">resetThresholdConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatcher` <a name="putMatcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher"></a>

```java
public void putMatcher(IResolvable OR java.util.List<AlertConfigurationMatcher> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMatcher.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>>

---

##### `putMetricThresholdConfig` <a name="putMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig"></a>

```java
public void putMetricThresholdConfig(IResolvable OR java.util.List<AlertConfigurationMetricThresholdConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putMetricThresholdConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>>

---

##### `putNotification` <a name="putNotification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification"></a>

```java
public void putNotification(IResolvable OR java.util.List<AlertConfigurationNotification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putNotification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>>

---

##### `putThresholdConfig` <a name="putThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig"></a>

```java
public void putThresholdConfig(IResolvable OR java.util.List<AlertConfigurationThresholdConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.putThresholdConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMatcher"></a>

```java
public void resetMatcher()
```

##### `resetMetricThresholdConfig` <a name="resetMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetMetricThresholdConfig"></a>

```java
public void resetMetricThresholdConfig()
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetNotification"></a>

```java
public void resetNotification()
```

##### `resetThresholdConfig` <a name="resetThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.resetThresholdConfig"></a>

```java
public void resetThresholdConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfiguration;

AlertConfiguration.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfiguration;

AlertConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfiguration;

AlertConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfiguration;

AlertConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlertConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AlertConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlertConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlertConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AlertConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.alertConfigurationId">alertConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList">AlertConfigurationMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfig">metricThresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList">AlertConfigurationMetricThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList">AlertConfigurationNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfig">thresholdConfig</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList">AlertConfigurationThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcherInput">matcherInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfigInput">metricThresholdConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notificationInput">notificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfigInput">thresholdConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.alertConfigurationId"></a>

```java
public java.lang.String getAlertConfigurationId();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcher"></a>

```java
public AlertConfigurationMatcherList getMatcher();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList">AlertConfigurationMatcherList</a>

---

##### `metricThresholdConfig`<sup>Required</sup> <a name="metricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfig"></a>

```java
public AlertConfigurationMetricThresholdConfigList getMetricThresholdConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList">AlertConfigurationMetricThresholdConfigList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notification"></a>

```java
public AlertConfigurationNotificationList getNotification();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList">AlertConfigurationNotificationList</a>

---

##### `thresholdConfig`<sup>Required</sup> <a name="thresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfig"></a>

```java
public AlertConfigurationThresholdConfigList getThresholdConfig();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList">AlertConfigurationThresholdConfigList</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.matcherInput"></a>

```java
public java.lang.Object getMatcherInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>>

---

##### `metricThresholdConfigInput`<sup>Optional</sup> <a name="metricThresholdConfigInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.metricThresholdConfigInput"></a>

```java
public java.lang.Object getMetricThresholdConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>>

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.notificationInput"></a>

```java
public java.lang.Object getNotificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `thresholdConfigInput`<sup>Optional</sup> <a name="thresholdConfigInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.thresholdConfigInput"></a>

```java
public java.lang.Object getThresholdConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConfigurationConfig <a name="AlertConfigurationConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationConfig;

AlertConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eventType(java.lang.String)
    .projectId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .matcher(IResolvable)
//  .matcher(java.util.List<AlertConfigurationMatcher>)
//  .metricThresholdConfig(IResolvable)
//  .metricThresholdConfig(java.util.List<AlertConfigurationMetricThresholdConfig>)
//  .notification(IResolvable)
//  .notification(java.util.List<AlertConfigurationNotification>)
//  .thresholdConfig(IResolvable)
//  .thresholdConfig(java.util.List<AlertConfigurationThresholdConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.eventType">eventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.matcher">matcher</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>></code> | matcher block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThresholdConfig">metricThresholdConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>></code> | metric_threshold_config block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.notification">notification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>></code> | notification block. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.thresholdConfig">thresholdConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>></code> | threshold_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#event_type AlertConfiguration#event_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#project_id AlertConfiguration#project_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#enabled AlertConfiguration#enabled}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.matcher"></a>

```java
public java.lang.Object getMatcher();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#matcher AlertConfiguration#matcher}

---

##### `metricThresholdConfig`<sup>Optional</sup> <a name="metricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.metricThresholdConfig"></a>

```java
public java.lang.Object getMetricThresholdConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>>

metric_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#metric_threshold_config AlertConfiguration#metric_threshold_config}

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.notification"></a>

```java
public java.lang.Object getNotification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#notification AlertConfiguration#notification}

---

##### `thresholdConfig`<sup>Optional</sup> <a name="thresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationConfig.property.thresholdConfig"></a>

```java
public java.lang.Object getThresholdConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>>

threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold_config AlertConfiguration#threshold_config}

---

### AlertConfigurationMatcher <a name="AlertConfigurationMatcher" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationMatcher;

AlertConfigurationMatcher.builder()
    .fieldName(java.lang.String)
    .operator(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#field_name AlertConfiguration#field_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#value AlertConfiguration#value}. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#field_name AlertConfiguration#field_name}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#value AlertConfiguration#value}.

---

### AlertConfigurationMetricThresholdConfig <a name="AlertConfigurationMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationMetricThresholdConfig;

AlertConfigurationMetricThresholdConfig.builder()
    .metricName(java.lang.String)
//  .mode(java.lang.String)
//  .operator(java.lang.String)
//  .threshold(java.lang.Number)
//  .units(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#mode AlertConfiguration#mode}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#units AlertConfiguration#units}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#metric_name AlertConfiguration#metric_name}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#mode AlertConfiguration#mode}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

### AlertConfigurationNotification <a name="AlertConfigurationNotification" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationNotification;

AlertConfigurationNotification.builder()
    .typeName(java.lang.String)
//  .apiToken(java.lang.String)
//  .channelName(java.lang.String)
//  .datadogApiKey(java.lang.String)
//  .datadogRegion(java.lang.String)
//  .delayMin(java.lang.Number)
//  .emailAddress(java.lang.String)
//  .emailEnabled(java.lang.Boolean)
//  .emailEnabled(IResolvable)
//  .integrationId(java.lang.String)
//  .intervalMin(java.lang.Number)
//  .microsoftTeamsWebhookUrl(java.lang.String)
//  .mobileNumber(java.lang.String)
//  .notifierId(java.lang.String)
//  .opsGenieApiKey(java.lang.String)
//  .opsGenieRegion(java.lang.String)
//  .roles(java.util.List<java.lang.String>)
//  .serviceKey(java.lang.String)
//  .smsEnabled(java.lang.Boolean)
//  .smsEnabled(IResolvable)
//  .teamId(java.lang.String)
//  .username(java.lang.String)
//  .victorOpsApiKey(java.lang.String)
//  .victorOpsRoutingKey(java.lang.String)
//  .webhookSecret(java.lang.String)
//  .webhookUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#type_name AlertConfiguration#type_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#api_token AlertConfiguration#api_token}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#channel_name AlertConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogApiKey">datadogApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#datadog_api_key AlertConfiguration#datadog_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#datadog_region AlertConfiguration#datadog_region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.delayMin">delayMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#delay_min AlertConfiguration#delay_min}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#email_address AlertConfiguration#email_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailEnabled">emailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#email_enabled AlertConfiguration#email_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#integration_id AlertConfiguration#integration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.intervalMin">intervalMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#interval_min AlertConfiguration#interval_min}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#microsoft_teams_webhook_url AlertConfiguration#microsoft_teams_webhook_url}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.mobileNumber">mobileNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#mobile_number AlertConfiguration#mobile_number}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.notifierId">notifierId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#notifier_id AlertConfiguration#notifier_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieApiKey">opsGenieApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#ops_genie_api_key AlertConfiguration#ops_genie_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieRegion">opsGenieRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#ops_genie_region AlertConfiguration#ops_genie_region}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#roles AlertConfiguration#roles}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#service_key AlertConfiguration#service_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.smsEnabled">smsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#sms_enabled AlertConfiguration#sms_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#team_id AlertConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#username AlertConfiguration#username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsApiKey">victorOpsApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#victor_ops_api_key AlertConfiguration#victor_ops_api_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsRoutingKey">victorOpsRoutingKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#victor_ops_routing_key AlertConfiguration#victor_ops_routing_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookSecret">webhookSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#webhook_secret AlertConfiguration#webhook_secret}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#webhook_url AlertConfiguration#webhook_url}. |

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#type_name AlertConfiguration#type_name}.

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#api_token AlertConfiguration#api_token}.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#channel_name AlertConfiguration#channel_name}.

---

##### `datadogApiKey`<sup>Optional</sup> <a name="datadogApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogApiKey"></a>

```java
public java.lang.String getDatadogApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#datadog_api_key AlertConfiguration#datadog_api_key}.

---

##### `datadogRegion`<sup>Optional</sup> <a name="datadogRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#datadog_region AlertConfiguration#datadog_region}.

---

##### `delayMin`<sup>Optional</sup> <a name="delayMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.delayMin"></a>

```java
public java.lang.Number getDelayMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#delay_min AlertConfiguration#delay_min}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#email_address AlertConfiguration#email_address}.

---

##### `emailEnabled`<sup>Optional</sup> <a name="emailEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.emailEnabled"></a>

```java
public java.lang.Object getEmailEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#email_enabled AlertConfiguration#email_enabled}.

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#integration_id AlertConfiguration#integration_id}.

---

##### `intervalMin`<sup>Optional</sup> <a name="intervalMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.intervalMin"></a>

```java
public java.lang.Number getIntervalMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#interval_min AlertConfiguration#interval_min}.

---

##### `microsoftTeamsWebhookUrl`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.microsoftTeamsWebhookUrl"></a>

```java
public java.lang.String getMicrosoftTeamsWebhookUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#microsoft_teams_webhook_url AlertConfiguration#microsoft_teams_webhook_url}.

---

##### `mobileNumber`<sup>Optional</sup> <a name="mobileNumber" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.mobileNumber"></a>

```java
public java.lang.String getMobileNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#mobile_number AlertConfiguration#mobile_number}.

---

##### `notifierId`<sup>Optional</sup> <a name="notifierId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.notifierId"></a>

```java
public java.lang.String getNotifierId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#notifier_id AlertConfiguration#notifier_id}.

---

##### `opsGenieApiKey`<sup>Optional</sup> <a name="opsGenieApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieApiKey"></a>

```java
public java.lang.String getOpsGenieApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#ops_genie_api_key AlertConfiguration#ops_genie_api_key}.

---

##### `opsGenieRegion`<sup>Optional</sup> <a name="opsGenieRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.opsGenieRegion"></a>

```java
public java.lang.String getOpsGenieRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#ops_genie_region AlertConfiguration#ops_genie_region}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#roles AlertConfiguration#roles}.

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#service_key AlertConfiguration#service_key}.

---

##### `smsEnabled`<sup>Optional</sup> <a name="smsEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.smsEnabled"></a>

```java
public java.lang.Object getSmsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#sms_enabled AlertConfiguration#sms_enabled}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#team_id AlertConfiguration#team_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#username AlertConfiguration#username}.

---

##### `victorOpsApiKey`<sup>Optional</sup> <a name="victorOpsApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsApiKey"></a>

```java
public java.lang.String getVictorOpsApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#victor_ops_api_key AlertConfiguration#victor_ops_api_key}.

---

##### `victorOpsRoutingKey`<sup>Optional</sup> <a name="victorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.victorOpsRoutingKey"></a>

```java
public java.lang.String getVictorOpsRoutingKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#victor_ops_routing_key AlertConfiguration#victor_ops_routing_key}.

---

##### `webhookSecret`<sup>Optional</sup> <a name="webhookSecret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookSecret"></a>

```java
public java.lang.String getWebhookSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#webhook_secret AlertConfiguration#webhook_secret}.

---

##### `webhookUrl`<sup>Optional</sup> <a name="webhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#webhook_url AlertConfiguration#webhook_url}.

---

### AlertConfigurationThresholdConfig <a name="AlertConfigurationThresholdConfig" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationThresholdConfig;

AlertConfigurationThresholdConfig.builder()
//  .operator(java.lang.String)
//  .threshold(java.lang.Number)
//  .units(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#units AlertConfiguration#units}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#operator AlertConfiguration#operator}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#threshold AlertConfiguration#threshold}.

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.16.2/docs/resources/alert_configuration#units AlertConfiguration#units}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConfigurationMatcherList <a name="AlertConfigurationMatcherList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationMatcherList;

new AlertConfigurationMatcherList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get"></a>

```java
public AlertConfigurationMatcherOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>>

---


### AlertConfigurationMatcherOutputReference <a name="AlertConfigurationMatcherOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationMatcherOutputReference;

new AlertConfigurationMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcherOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMatcher">AlertConfigurationMatcher</a>

---


### AlertConfigurationMetricThresholdConfigList <a name="AlertConfigurationMetricThresholdConfigList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationMetricThresholdConfigList;

new AlertConfigurationMetricThresholdConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.get"></a>

```java
public AlertConfigurationMetricThresholdConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>>

---


### AlertConfigurationMetricThresholdConfigOutputReference <a name="AlertConfigurationMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationMetricThresholdConfigOutputReference;

new AlertConfigurationMetricThresholdConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.resetUnits"></a>

```java
public void resetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationMetricThresholdConfig">AlertConfigurationMetricThresholdConfig</a>

---


### AlertConfigurationNotificationList <a name="AlertConfigurationNotificationList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationNotificationList;

new AlertConfigurationNotificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get"></a>

```java
public AlertConfigurationNotificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>>

---


### AlertConfigurationNotificationOutputReference <a name="AlertConfigurationNotificationOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationNotificationOutputReference;

new AlertConfigurationNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogApiKey">resetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogRegion">resetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDelayMin">resetDelayMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailEnabled">resetEmailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntervalMin">resetIntervalMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMicrosoftTeamsWebhookUrl">resetMicrosoftTeamsWebhookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMobileNumber">resetMobileNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetNotifierId">resetNotifierId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieApiKey">resetOpsGenieApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieRegion">resetOpsGenieRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetServiceKey">resetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetSmsEnabled">resetSmsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsApiKey">resetVictorOpsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsRoutingKey">resetVictorOpsRoutingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookSecret">resetWebhookSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookUrl">resetWebhookUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetApiToken"></a>

```java
public void resetApiToken()
```

##### `resetChannelName` <a name="resetChannelName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetChannelName"></a>

```java
public void resetChannelName()
```

##### `resetDatadogApiKey` <a name="resetDatadogApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogApiKey"></a>

```java
public void resetDatadogApiKey()
```

##### `resetDatadogRegion` <a name="resetDatadogRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDatadogRegion"></a>

```java
public void resetDatadogRegion()
```

##### `resetDelayMin` <a name="resetDelayMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetDelayMin"></a>

```java
public void resetDelayMin()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetEmailEnabled` <a name="resetEmailEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetEmailEnabled"></a>

```java
public void resetEmailEnabled()
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntegrationId"></a>

```java
public void resetIntegrationId()
```

##### `resetIntervalMin` <a name="resetIntervalMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetIntervalMin"></a>

```java
public void resetIntervalMin()
```

##### `resetMicrosoftTeamsWebhookUrl` <a name="resetMicrosoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMicrosoftTeamsWebhookUrl"></a>

```java
public void resetMicrosoftTeamsWebhookUrl()
```

##### `resetMobileNumber` <a name="resetMobileNumber" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetMobileNumber"></a>

```java
public void resetMobileNumber()
```

##### `resetNotifierId` <a name="resetNotifierId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetNotifierId"></a>

```java
public void resetNotifierId()
```

##### `resetOpsGenieApiKey` <a name="resetOpsGenieApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieApiKey"></a>

```java
public void resetOpsGenieApiKey()
```

##### `resetOpsGenieRegion` <a name="resetOpsGenieRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetOpsGenieRegion"></a>

```java
public void resetOpsGenieRegion()
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetServiceKey` <a name="resetServiceKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetServiceKey"></a>

```java
public void resetServiceKey()
```

##### `resetSmsEnabled` <a name="resetSmsEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetSmsEnabled"></a>

```java
public void resetSmsEnabled()
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetTeamId"></a>

```java
public void resetTeamId()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetVictorOpsApiKey` <a name="resetVictorOpsApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsApiKey"></a>

```java
public void resetVictorOpsApiKey()
```

##### `resetVictorOpsRoutingKey` <a name="resetVictorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetVictorOpsRoutingKey"></a>

```java
public void resetVictorOpsRoutingKey()
```

##### `resetWebhookSecret` <a name="resetWebhookSecret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookSecret"></a>

```java
public void resetWebhookSecret()
```

##### `resetWebhookUrl` <a name="resetWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.resetWebhookUrl"></a>

```java
public void resetWebhookUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamName">teamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiTokenInput">apiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKeyInput">datadogApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegionInput">datadogRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMinInput">delayMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabledInput">emailEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMinInput">intervalMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrlInput">microsoftTeamsWebhookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumberInput">mobileNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierIdInput">notifierIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKeyInput">opsGenieApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegionInput">opsGenieRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKeyInput">serviceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabledInput">smsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKeyInput">victorOpsApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKeyInput">victorOpsRoutingKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecretInput">webhookSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrlInput">webhookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKey">datadogApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMin">delayMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabled">emailEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMin">intervalMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl">microsoftTeamsWebhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumber">mobileNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierId">notifierId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKey">opsGenieApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegion">opsGenieRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabled">smsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKey">victorOpsApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey">victorOpsRoutingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecret">webhookSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamName"></a>

```java
public java.lang.String getTeamName();
```

- *Type:* java.lang.String

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiTokenInput"></a>

```java
public java.lang.String getApiTokenInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `datadogApiKeyInput`<sup>Optional</sup> <a name="datadogApiKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKeyInput"></a>

```java
public java.lang.String getDatadogApiKeyInput();
```

- *Type:* java.lang.String

---

##### `datadogRegionInput`<sup>Optional</sup> <a name="datadogRegionInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegionInput"></a>

```java
public java.lang.String getDatadogRegionInput();
```

- *Type:* java.lang.String

---

##### `delayMinInput`<sup>Optional</sup> <a name="delayMinInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMinInput"></a>

```java
public java.lang.Number getDelayMinInput();
```

- *Type:* java.lang.Number

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `emailEnabledInput`<sup>Optional</sup> <a name="emailEnabledInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabledInput"></a>

```java
public java.lang.Object getEmailEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `intervalMinInput`<sup>Optional</sup> <a name="intervalMinInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMinInput"></a>

```java
public java.lang.Number getIntervalMinInput();
```

- *Type:* java.lang.Number

---

##### `microsoftTeamsWebhookUrlInput`<sup>Optional</sup> <a name="microsoftTeamsWebhookUrlInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrlInput"></a>

```java
public java.lang.String getMicrosoftTeamsWebhookUrlInput();
```

- *Type:* java.lang.String

---

##### `mobileNumberInput`<sup>Optional</sup> <a name="mobileNumberInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumberInput"></a>

```java
public java.lang.String getMobileNumberInput();
```

- *Type:* java.lang.String

---

##### `notifierIdInput`<sup>Optional</sup> <a name="notifierIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierIdInput"></a>

```java
public java.lang.String getNotifierIdInput();
```

- *Type:* java.lang.String

---

##### `opsGenieApiKeyInput`<sup>Optional</sup> <a name="opsGenieApiKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKeyInput"></a>

```java
public java.lang.String getOpsGenieApiKeyInput();
```

- *Type:* java.lang.String

---

##### `opsGenieRegionInput`<sup>Optional</sup> <a name="opsGenieRegionInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegionInput"></a>

```java
public java.lang.String getOpsGenieRegionInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="serviceKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKeyInput"></a>

```java
public java.lang.String getServiceKeyInput();
```

- *Type:* java.lang.String

---

##### `smsEnabledInput`<sup>Optional</sup> <a name="smsEnabledInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabledInput"></a>

```java
public java.lang.Object getSmsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `victorOpsApiKeyInput`<sup>Optional</sup> <a name="victorOpsApiKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKeyInput"></a>

```java
public java.lang.String getVictorOpsApiKeyInput();
```

- *Type:* java.lang.String

---

##### `victorOpsRoutingKeyInput`<sup>Optional</sup> <a name="victorOpsRoutingKeyInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKeyInput"></a>

```java
public java.lang.String getVictorOpsRoutingKeyInput();
```

- *Type:* java.lang.String

---

##### `webhookSecretInput`<sup>Optional</sup> <a name="webhookSecretInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecretInput"></a>

```java
public java.lang.String getWebhookSecretInput();
```

- *Type:* java.lang.String

---

##### `webhookUrlInput`<sup>Optional</sup> <a name="webhookUrlInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrlInput"></a>

```java
public java.lang.String getWebhookUrlInput();
```

- *Type:* java.lang.String

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `datadogApiKey`<sup>Required</sup> <a name="datadogApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogApiKey"></a>

```java
public java.lang.String getDatadogApiKey();
```

- *Type:* java.lang.String

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.datadogRegion"></a>

```java
public java.lang.String getDatadogRegion();
```

- *Type:* java.lang.String

---

##### `delayMin`<sup>Required</sup> <a name="delayMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.delayMin"></a>

```java
public java.lang.Number getDelayMin();
```

- *Type:* java.lang.Number

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `emailEnabled`<sup>Required</sup> <a name="emailEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.emailEnabled"></a>

```java
public java.lang.Object getEmailEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `intervalMin`<sup>Required</sup> <a name="intervalMin" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.intervalMin"></a>

```java
public java.lang.Number getIntervalMin();
```

- *Type:* java.lang.Number

---

##### `microsoftTeamsWebhookUrl`<sup>Required</sup> <a name="microsoftTeamsWebhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```java
public java.lang.String getMicrosoftTeamsWebhookUrl();
```

- *Type:* java.lang.String

---

##### `mobileNumber`<sup>Required</sup> <a name="mobileNumber" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.mobileNumber"></a>

```java
public java.lang.String getMobileNumber();
```

- *Type:* java.lang.String

---

##### `notifierId`<sup>Required</sup> <a name="notifierId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.notifierId"></a>

```java
public java.lang.String getNotifierId();
```

- *Type:* java.lang.String

---

##### `opsGenieApiKey`<sup>Required</sup> <a name="opsGenieApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieApiKey"></a>

```java
public java.lang.String getOpsGenieApiKey();
```

- *Type:* java.lang.String

---

##### `opsGenieRegion`<sup>Required</sup> <a name="opsGenieRegion" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.opsGenieRegion"></a>

```java
public java.lang.String getOpsGenieRegion();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `smsEnabled`<sup>Required</sup> <a name="smsEnabled" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.smsEnabled"></a>

```java
public java.lang.Object getSmsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `victorOpsApiKey`<sup>Required</sup> <a name="victorOpsApiKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsApiKey"></a>

```java
public java.lang.String getVictorOpsApiKey();
```

- *Type:* java.lang.String

---

##### `victorOpsRoutingKey`<sup>Required</sup> <a name="victorOpsRoutingKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey"></a>

```java
public java.lang.String getVictorOpsRoutingKey();
```

- *Type:* java.lang.String

---

##### `webhookSecret`<sup>Required</sup> <a name="webhookSecret" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookSecret"></a>

```java
public java.lang.String getWebhookSecret();
```

- *Type:* java.lang.String

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationNotification">AlertConfigurationNotification</a>

---


### AlertConfigurationThresholdConfigList <a name="AlertConfigurationThresholdConfigList" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationThresholdConfigList;

new AlertConfigurationThresholdConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.get"></a>

```java
public AlertConfigurationThresholdConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>>

---


### AlertConfigurationThresholdConfigOutputReference <a name="AlertConfigurationThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.alert_configuration.AlertConfigurationThresholdConfigOutputReference;

new AlertConfigurationThresholdConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.resetUnits"></a>

```java
public void resetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.alertConfiguration.AlertConfigurationThresholdConfig">AlertConfigurationThresholdConfig</a>

---



